-- Appointments table for storing booking information
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'confirmed',
  notes TEXT
);

-- Available time slots table for managing booking availability
CREATE TABLE available_time_slots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  is_available BOOLEAN DEFAULT true,
  
  -- Enforce unique date-time combinations
  CONSTRAINT unique_date_time UNIQUE (date, time)
);

-- Create indexes for better query performance
CREATE INDEX idx_appointments_date ON appointments(date);
CREATE INDEX idx_available_slots_date ON available_time_slots(date);

-- Insert sample data for available time slots
INSERT INTO available_time_slots (date, time, is_available) VALUES 
('2025-07-25', '09:00 AM', true),
('2025-07-25', '09:30 AM', true),
('2025-07-25', '10:00 AM', true),
('2025-07-25', '10:30 AM', true),
('2025-07-25', '11:00 AM', true),
('2025-07-25', '11:30 AM', true),
('2025-07-25', '01:00 PM', true),
('2025-07-25', '01:30 PM', true),
('2025-07-25', '02:00 PM', true),
('2025-07-25', '02:30 PM', true),
('2025-07-25', '03:00 PM', true),
('2025-07-25', '03:30 PM', true),
('2025-07-26', '09:00 AM', true),
('2025-07-26', '09:30 AM', true),
('2025-07-26', '10:00 AM', true),
('2025-07-26', '10:30 AM', true),
('2025-07-26', '11:00 AM', true),
('2025-07-26', '11:30 AM', true),
('2025-07-26', '01:00 PM', true),
('2025-07-26', '01:30 PM', true),
('2025-07-26', '02:00 PM', true),
('2025-07-26', '02:30 PM', true),
('2025-07-26', '03:00 PM', true),
('2025-07-26', '03:30 PM', true);

-- Note: You might want to add more dates or create a script/function to
-- automatically generate available slots for future dates
