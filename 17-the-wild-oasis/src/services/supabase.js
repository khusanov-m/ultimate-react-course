import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ghhxycwnpjvawmpvuedy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoaHh5Y3ducGp2YXdtcHZ1ZWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTkzNjMsImV4cCI6MjAxMDM3NTM2M30.m2P8L6kYpDSz6TcLCbwAl4VQzromnin271oCjb6KPPI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
