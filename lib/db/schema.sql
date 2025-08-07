-- Appointments table
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'confirmed' -- could be 'confirmed', 'cancelled', 'completed'
);

-- Available time slots table (for more dynamic time slot management)
CREATE TABLE available_time_slots (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  is_available BOOLEAN DEFAULT true,
  UNIQUE(date, time)
);
