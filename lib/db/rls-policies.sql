-- Enable Row Level Security (RLS) on both tables
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE available_time_slots ENABLE ROW LEVEL SECURITY;

-- Policy for appointments table
-- Allow anyone to insert new appointments (for booking)
CREATE POLICY "Allow public to insert appointments" ON appointments
    FOR INSERT WITH CHECK (true);

-- Allow anyone to read appointments (you might want to restrict this later)
CREATE POLICY "Allow public to read appointments" ON appointments
    FOR SELECT USING (true);

-- Policy for available_time_slots table
-- Allow anyone to read available time slots (for displaying available times)
CREATE POLICY "Allow public to read time slots" ON available_time_slots
    FOR SELECT USING (true);

-- Allow anyone to update time slots (for marking as unavailable when booked)
CREATE POLICY "Allow public to update time slots" ON available_time_slots
    FOR UPDATE USING (true);

-- Optional: More restrictive policies for production
-- You can replace the above policies with these more secure ones later:

/*
-- More secure appointment policies (commented out for now):

-- Only allow reading appointments by email (users can only see their own)
CREATE POLICY "Users can read own appointments" ON appointments
    FOR SELECT USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- Only allow inserting appointments with valid email
CREATE POLICY "Allow authenticated users to insert appointments" ON appointments
    FOR INSERT WITH CHECK (email IS NOT NULL AND email != '');
*/
