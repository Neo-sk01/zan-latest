import { format } from 'date-fns';
import { supabase } from '../supabase';

/**
 * Fetches available time slots for a given date
 * @param date The date to fetch available slots for
 * @returns Array of available time slots
 */
export async function getAvailableTimeSlots(date: Date): Promise<string[]> {
  const formattedDate = format(date, 'yyyy-MM-dd');
  
  try {
    // Query Supabase for available time slots
    const { data, error } = await supabase
      .from('available_time_slots')
      .select('time')
      .eq('date', formattedDate)
      .eq('is_available', true)
      .order('time');
    
    if (error) {
      console.error('Error fetching available time slots:', error);
      return getDefaultTimeSlots();
    }
    
    // If no slots found in the database, return default slots
    if (!data || data.length === 0) {
      return getDefaultTimeSlots();
    }
    
    // Return available times
    return data.map((slot: { time: string }) => slot.time);
  } catch (err) {
    console.error('Failed to fetch available time slots:', err);
    return getDefaultTimeSlots();
  }
}

/**
 * Creates a new appointment in Supabase
 * @param appointmentData Appointment details
 * @returns Result of the operation
 */
export async function createAppointment(appointmentData: {
  date: Date;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}): Promise<{ success: boolean; error?: string; data?: any }> {
  try {
    const dateString = format(appointmentData.date, 'yyyy-MM-dd');
    
    // Insert the appointment
    const { data, error } = await supabase
      .from('appointments')
      .insert({
        date: dateString,
        time: appointmentData.time,
        name: appointmentData.name,
        email: appointmentData.email,
        phone: appointmentData.phone,
        notes: appointmentData.notes || '',
        status: 'confirmed'
      })
      .select()
      .single();
    
    if (error) {
      console.error('Error creating appointment:', error);
      return { success: false, error: error.message };
    }
    
    // Mark the time slot as unavailable
    const { error: updateError } = await supabase
      .from('available_time_slots')
      .update({ is_available: false })
      .eq('date', dateString)
      .eq('time', appointmentData.time);
    
    if (updateError) {
      console.error('Error updating time slot:', updateError);
      // Note: We don't return an error here as the appointment was created successfully
    }
    
    // Send confirmation email
    try {
      const emailResponse = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: appointmentData.name,
          email: appointmentData.email,
          phone: appointmentData.phone,
          date: dateString,
          time: appointmentData.time,
        }),
      });
      
      if (!emailResponse.ok) {
        console.error('Failed to send confirmation email');
        // Don't fail the appointment creation if email fails
      } else {
        console.log('Confirmation email sent successfully');
      }
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      // Don't fail the appointment creation if email fails
    }
    
    return { success: true, data };
  } catch (err) {
    console.error('Unexpected error creating appointment:', err);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

/**
 * Returns default business hours
 * @returns Array of default time slots
 */
function getDefaultTimeSlots(): string[] {
  return [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  ];
}
