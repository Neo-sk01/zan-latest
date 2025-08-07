import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { AppointmentConfirmationTemplate } from '@/components/email-templates/appointment-confirmation';
import { ClinicNotificationTemplate } from '@/components/email-templates/clinic-notification';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const { name, email, date, time, phone } = await request.json();

    // Validate required fields
    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, date, and time are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Format the date for display
    const appointmentDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send confirmation email to patient
    console.log(`Sending confirmation email to: ${email}`);
    const patientEmail = await resend.emails.send({
      from: 'Zan Orthodontist <onboarding@resend.dev>', // Using Resend's test domain for development
      to: [email],
      subject: 'Appointment Confirmation - Zan Orthodontist',
      react: AppointmentConfirmationTemplate({
        patientName: name,
        appointmentDate: appointmentDate,
        appointmentTime: time,
        patientPhone: phone,
        patientEmail: email,
      }),
    });

    if (patientEmail.error) {
      console.error('Error sending patient email:', patientEmail.error);
      return NextResponse.json(
        { error: 'Failed to send confirmation email to patient' },
        { status: 500 }
      );
    }

    console.log(`Patient email sent successfully. ID: ${patientEmail.data?.id}`);

    // Send notification email to clinic staff
    console.log('Sending notification email to clinic staff');
    const clinicEmail = await resend.emails.send({
      from: 'Zan Orthodontist <onboarding@resend.dev>', // Using Resend's test domain for development
      to: ['neosekaleli@gmail.com'], // Clinic notification email
      subject: `New Appointment Booked - ${appointmentDate} at ${time}`,
      react: ClinicNotificationTemplate({
        patientName: name,
        patientEmail: email,
        patientPhone: phone,
        appointmentDate: appointmentDate,
        appointmentTime: time,
      }),
    });

    if (clinicEmail.error) {
      console.error('Error sending clinic email:', clinicEmail.error);
      // Don't fail the request if clinic email fails, but log it
      console.warn('Clinic notification email failed, but patient email was sent successfully');
    } else {
      console.log(`Clinic email sent successfully. ID: ${clinicEmail.data?.id}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Confirmation emails sent successfully',
      patientEmailId: patientEmail.data?.id,
      clinicEmailId: clinicEmail.data?.id,
    });

  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return NextResponse.json(
      { error: 'Failed to send confirmation email' },
      { status: 500 }
    );
  }
}
