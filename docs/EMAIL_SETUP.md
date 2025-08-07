# Email Setup Guide

This guide explains how to set up and test the email functionality for the Zan Orthodontist appointment booking system.

## Overview

The email system uses [Resend](https://resend.com) to send:
1. **Patient Confirmation Emails** - Sent to patients after booking an appointment
2. **Clinic Notification Emails** - Sent to clinic staff when new appointments are booked

## Setup Instructions

### 1. Get a Resend API Key

1. Go to [resend.com](https://resend.com) and create an account
2. Navigate to API Keys in your dashboard
3. Create a new API key
4. Copy the API key (it starts with `re_`)

### 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### 3. Domain Configuration (Production)

For production use, you'll need to:
1. Add and verify your domain in Resend
2. Update the `from` email addresses in the API routes to use your verified domain
3. Currently set to: `appointments@zanorthodontist.com`

## Testing the Email System

### Option 1: Use the Test Endpoint

Send a POST request to `/api/test-email`:

```bash
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email": "your-email@example.com"}'
```

### Option 2: Test Through the Booking Form

1. Start the development server: `npm run dev`
2. Navigate to the appointment booking section
3. Fill out the form with your email address
4. Submit the booking
5. Check your email for the confirmation

## Email Templates

### Patient Confirmation Email
- **Template**: `components/email-templates/appointment-confirmation.tsx`
- **Features**: 
  - Professional design with clinic branding
  - Appointment details clearly displayed
  - Contact information and important notes
  - Mobile-responsive layout

### Clinic Notification Email
- **Template**: `components/email-templates/clinic-notification.tsx`
- **Features**:
  - Alert-style design for staff attention
  - Patient contact information with clickable links
  - Appointment details highlighted
  - Next steps checklist

## API Endpoints

### `/api/send-confirmation` (POST)
Main endpoint for sending appointment confirmation emails.

**Request Body:**
```json
{
  "name": "Patient Name",
  "email": "patient@example.com",
  "phone": "(555) 123-4567",
  "date": "2024-01-15",
  "time": "10:00 AM"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Confirmation emails sent successfully",
  "patientEmailId": "email-id-1",
  "clinicEmailId": "email-id-2"
}
```

### `/api/test-email` (POST)
Test endpoint for verifying email configuration.

**Request Body:**
```json
{
  "email": "test@example.com"
}
```

## Error Handling

The system includes comprehensive error handling:
- API key validation
- Email format validation
- Required field validation
- Detailed logging for debugging
- Graceful fallbacks (appointment creation succeeds even if email fails)

## Troubleshooting

### Common Issues

1. **"Email service not configured"**
   - Check that `RESEND_API_KEY` is set in `.env.local`
   - Verify the API key is correct and active

2. **"Failed to send confirmation email"**
   - Check your Resend account limits
   - Verify the sender domain is configured correctly
   - Check the server logs for detailed error messages

3. **Emails not being received**
   - Check spam/junk folders
   - Verify the recipient email address is correct
   - For production, ensure your domain is verified in Resend

### Development Mode

In development, Resend allows sending emails from unverified domains to verified email addresses. Make sure the email address you're testing with is verified in your Resend account.

## Configuration Options

### Clinic Notification Email
Update the clinic notification recipient in `/app/api/send-confirmation/route.ts`:
```typescript
to: ['your-clinic-email@example.com'], // Update this line
```

### Sender Email Address
Update the sender address in both API routes:
```typescript
from: 'Your Clinic Name <appointments@yourdomain.com>',
```

## Monitoring

Email sending is logged to the console with:
- Recipient email addresses
- Success/failure status
- Email IDs for tracking
- Error details for debugging

Check your application logs to monitor email delivery status.
