import { createClient } from "@supabase/supabase-js";

const SupabaseURL: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SupabaseDBToken: string = process.env
  .NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(SupabaseURL, SupabaseDBToken);

export default supabase;
