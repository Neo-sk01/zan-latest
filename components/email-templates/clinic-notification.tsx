import * as React from 'react';

interface ClinicNotificationProps {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  appointmentDate: string;
  appointmentTime: string;
}

export function ClinicNotificationTemplate({
  patientName,
  patientEmail,
  patientPhone,
  appointmentDate,
  appointmentTime,
}: ClinicNotificationProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#dc2626', fontSize: '28px', marginBottom: '10px' }}>
          🔔 New Appointment Alert
        </h1>
        <p style={{ color: '#6b7280', fontSize: '16px', margin: '0' }}>
          Zan Orthodontist - Admin Notification
        </p>
      </div>

      {/* Alert Box */}
      <div style={{ 
        backgroundColor: '#fef2f2', 
        border: '2px solid #dc2626', 
        borderRadius: '12px', 
        padding: '25px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#991b1b', fontSize: '20px', marginTop: '0', marginBottom: '15px' }}>
          📅 New Appointment Booked
        </h2>
        
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '20px' }}>
          A new appointment has been scheduled through the online booking system. Please review the details below and add to your calendar.
        </p>

        {/* Patient Information */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          border: '1px solid #e5e7eb', 
          borderRadius: '8px', 
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#1f2937', fontSize: '18px', marginTop: '0', marginBottom: '15px' }}>
            👤 Patient Information
          </h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#374151', width: '120px' }}>
                Name:
              </td>
              <td style={{ padding: '8px 0', color: '#1f2937', fontSize: '16px' }}>
                {patientName}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#374151' }}>
                Email:
              </td>
              <td style={{ padding: '8px 0', color: '#1f2937' }}>
                <a href={`mailto:${patientEmail}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                  {patientEmail}
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#374151' }}>
                Phone:
              </td>
              <td style={{ padding: '8px 0', color: '#1f2937' }}>
                <a href={`tel:${patientPhone}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                  {patientPhone}
                </a>
              </td>
            </tr>
          </table>
        </div>

        {/* Appointment Details */}
        <div style={{ 
          backgroundColor: '#f0f9ff', 
          border: '1px solid #0ea5e9', 
          borderRadius: '8px', 
          padding: '20px'
        }}>
          <h3 style={{ color: '#0c4a6e', fontSize: '18px', marginTop: '0', marginBottom: '15px' }}>
            🗓️ Appointment Details
          </h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#374151', width: '120px' }}>
                Date:
              </td>
              <td style={{ padding: '8px 0', color: '#0c4a6e', fontSize: '18px', fontWeight: 'bold' }}>
                {appointmentDate}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#374151' }}>
                Time:
              </td>
              <td style={{ padding: '8px 0', color: '#0c4a6e', fontSize: '18px', fontWeight: 'bold' }}>
                {appointmentTime}
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/* Action Items */}
      <div style={{ 
        backgroundColor: '#f0fdf4', 
        border: '1px solid #22c55e', 
        borderRadius: '8px', 
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h3 style={{ color: '#166534', fontSize: '16px', marginTop: '0', marginBottom: '15px' }}>
          ✅ Next Steps
        </h3>
        <ul style={{ color: '#166534', fontSize: '14px', lineHeight: '1.6', margin: '0', paddingLeft: '20px' }}>
          <li>Add appointment to clinic calendar</li>
          <li>Prepare patient file and treatment room</li>
          <li>Send any pre-appointment instructions if needed</li>
          <li>Confirm appointment 24 hours in advance</li>
        </ul>
      </div>

      {/* System Information */}
      <div style={{ 
        borderTop: '1px solid #e5e7eb', 
        paddingTop: '20px', 
        textAlign: 'center'
      }}>
        <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: '1.5', margin: '0' }}>
          This notification was automatically generated by the Zan Orthodontist booking system.
          <br />
          Booking time: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}
