import * as React from 'react';

interface AppointmentConfirmationProps {
  patientName: string;
  appointmentDate: string;
  appointmentTime: string;
  patientPhone: string;
  patientEmail: string;
}

export function AppointmentConfirmationTemplate({
  patientName,
  appointmentDate,
  appointmentTime,
  patientPhone,
  patientEmail,
}: AppointmentConfirmationProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2563eb', fontSize: '28px', marginBottom: '10px' }}>
          Zan Orthodontist
        </h1>
        <p style={{ color: '#6b7280', fontSize: '16px', margin: '0' }}>
          Creating Beautiful Smiles
        </p>
      </div>

      {/* Main Content */}
      <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
        <h2 style={{ color: '#059669', fontSize: '24px', marginTop: '0', marginBottom: '20px', textAlign: 'center' }}>
          ✅ Appointment Confirmed!
        </h2>
        
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '20px' }}>
          Dear <strong>{patientName}</strong>,
        </p>
        
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '25px' }}>
          Your appointment has been successfully scheduled. We&rsquo;re excited to help you achieve your perfect smile!
        </p>

        {/* Appointment Details Box */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          border: '2px solid #e5e7eb', 
          borderRadius: '8px', 
          padding: '25px',
          marginBottom: '25px'
        }}>
          <h3 style={{ color: '#1f2937', fontSize: '18px', marginTop: '0', marginBottom: '15px' }}>
            📅 Appointment Details
          </h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#374151', width: '120px' }}>
                Date:
              </td>
              <td style={{ padding: '8px 0', color: '#1f2937' }}>
                {appointmentDate}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#374151' }}>
                Time:
              </td>
              <td style={{ padding: '8px 0', color: '#1f2937' }}>
                {appointmentTime}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#374151' }}>
                Patient:
              </td>
              <td style={{ padding: '8px 0', color: '#1f2937' }}>
                {patientName}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#374151' }}>
                Phone:
              </td>
              <td style={{ padding: '8px 0', color: '#1f2937' }}>
                {patientPhone}
              </td>
            </tr>
          </table>
        </div>

        {/* Important Information */}
        <div style={{ 
          backgroundColor: '#fef3c7', 
          border: '1px solid #f59e0b', 
          borderRadius: '8px', 
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h4 style={{ color: '#92400e', fontSize: '16px', marginTop: '0', marginBottom: '10px' }}>
            ⚠️ Important Information
          </h4>
          <ul style={{ color: '#92400e', fontSize: '14px', lineHeight: '1.5', margin: '0', paddingLeft: '20px' }}>
            <li>Please arrive 15 minutes early for your appointment</li>
            <li>Bring a valid ID and insurance card</li>
            <li>If you need to reschedule, please call us at least 24 hours in advance</li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3 style={{ color: '#374151', fontSize: '18px', marginBottom: '15px' }}>
          Contact Information
        </h3>
        <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', margin: '5px 0' }}>
          📞 Phone: +27 71 639 0430
        </p>
        <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', margin: '5px 0' }}>
          📧 Email: info@zanorthodontist.com
        </p>
        <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', margin: '5px 0' }}>
          🕒 Operating Hours:
        </p>
        <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.4', margin: '2px 0 2px 20px' }}>
          Monday to Friday: 8:30 AM – 5:00 PM
        </p>
        <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.4', margin: '2px 0 2px 20px' }}>
          Saturday: By Appointment
        </p>
        <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.4', margin: '2px 0 5px 20px' }}>
          Closed on Sundays and Public Holidays
        </p>
      </div>

      {/* Footer */}
      <div style={{ 
        borderTop: '1px solid #e5e7eb', 
        paddingTop: '20px', 
        textAlign: 'center'
      }}>
        <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: '1.5', margin: '0' }}>
          This is an automated confirmation email. Please do not reply to this email.
          <br />
          If you have any questions, please contact us directly.
        </p>
      </div>
    </div>
  );
}
