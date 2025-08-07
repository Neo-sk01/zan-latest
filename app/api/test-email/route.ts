import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { AppointmentConfirmationTemplate } from '@/components/email-templates/appointment-confirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    // Send test email
    console.log(`Sending test email to: ${email}`);
    const testEmail = await resend.emails.send({
      from: 'Zan Orthodontist <onboarding@resend.dev>', // Using Resend's test domain for development
      to: [email],
      subject: 'Test Email - Zan Orthodontist Email System',
      react: AppointmentConfirmationTemplate({
        patientName: 'Test Patient',
        appointmentDate: 'Monday, January 15, 2024',
        appointmentTime: '10:00 AM',
        patientPhone: '(555) 123-4567',
        patientEmail: email,
      }),
    });

    if (testEmail.error) {
      console.error('Error sending test email:', testEmail.error);
      return NextResponse.json(
        { error: 'Failed to send test email', details: testEmail.error },
        { status: 500 }
      );
    }

    console.log(`Test email sent successfully. ID: ${testEmail.data?.id}`);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      emailId: testEmail.data?.id,
    });

  } catch (error) {
    console.error('Error in test email endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
