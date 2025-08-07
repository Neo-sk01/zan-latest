import { createClient } from '@supabase/supabase-js'

// Use the specific URL and get the key from environment variables
const supabaseUrl = 'https://ofmyxoogcgvvbwcjnbij.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key available:', !!supabaseAnonKey)

// Create a single supabase client for the entire application
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
