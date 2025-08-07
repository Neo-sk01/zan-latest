-- Option 2: Add user authentication support to existing schema
-- Run this if you want to implement user authentication

-- Add user_id column to appointments table (optional - for authenticated users)
ALTER TABLE appointments ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- Enable Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE available_time_slots ENABLE ROW LEVEL SECURITY;

-- More restrictive policies (requires authentication)
-- Drop any existing policies first
DROP POLICY IF EXISTS "Allow public to insert appointments" ON appointments;
DROP POLICY IF EXISTS "Allow public to read appointments" ON appointments;
DROP POLICY IF EXISTS "Allow public to read time slots" ON available_time_slots;
DROP POLICY IF EXISTS "Allow public to update time slots" ON available_time_slots;

-- New restrictive policies
CREATE POLICY "No access for anonymous users" ON appointments
FOR ALL USING (false)
WITH CHECK (false);

CREATE POLICY "Users can manage their own appointments" ON appointments
FOR ALL USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Allow everyone to read available time slots (still needed for booking interface)
CREATE POLICY "Allow public to read time slots" ON available_time_slots
FOR SELECT USING (true);

-- Only authenticated users can update time slots
CREATE POLICY "Authenticated users can update time slots" ON available_time_slots
FOR UPDATE USING (auth.uid() IS NOT NULL);
