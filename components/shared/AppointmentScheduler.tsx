"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { getAvailableTimeSlots, createAppointment } from "@/lib/utils/appointment-utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

// The getAvailableTimeSlots function is now imported from appointment-utils

const AppointmentFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});

export const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof AppointmentFormSchema>>({
    resolver: zodResolver(AppointmentFormSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  // Fetch available times whenever the selected date changes
  useEffect(() => {
    const fetchAvailableTimes = async () => {
      if (!selectedDate) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const times = await getAvailableTimeSlots(selectedDate);
        setAvailableTimes(times);
      } catch (err) {
        console.error('Failed to fetch available times:', err);
        setError('Failed to load available time slots. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchAvailableTimes();
  }, [selectedDate]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const onSubmit = async (data: z.infer<typeof AppointmentFormSchema>) => {
    if (selectedDate && selectedTime) {
      setIsLoading(true);
      setError(null);
      
      try {
        const result = await createAppointment({
          date: selectedDate,
          time: selectedTime,
          name: data.name,
          email: data.email,
          phone: data.phone
        });
        
        if (!result.success) {
          throw new Error(result.error || 'Failed to create appointment');
        }
        
        setIsConfirmed(true);
      } catch (err) {
        console.error('Error submitting appointment:', err);
        setError(err instanceof Error ? err.message : 'Failed to submit appointment. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isConfirmed) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-green-600">Appointment Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>Thank you for booking, {form.getValues("name")}!</p>
          <p>A confirmation has been sent to {form.getValues("email")}.</p>
          <p>Your appointment is on {selectedDate && format(selectedDate, "PPP")} at {selectedTime}.</p>
          <Button onClick={() => setIsConfirmed(false)} className="mt-4">Book Another Appointment</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-3xl">Book a Consultation</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">1. Select a Date</h3>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={(date: Date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                className="rounded-md border"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">2. Select a Time</h3>
            {isLoading ? (
              <div className="text-center py-8">Loading available times...</div>
            ) : availableTimes.length > 0 ? (
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    disabled={!selectedDate}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">No available times for this date. Please select another date.</div>
            )}
          </div>
        </div>

        {selectedDate && selectedTime && (
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4 text-center">3. Enter Your Details</h3>
            <p className="text-center text-muted-foreground mb-4">
              Confirming for {selectedTime} on {format(selectedDate, "PPP")}
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Confirm Appointment'}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AppointmentScheduler;
