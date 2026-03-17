import { env } from '$env/dynamic/public';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
	const supabaseUrl = env.PUBLIC_SUPABASE_URL;
	const supabaseAnonKey = env.PUBLIC_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error('Missing Supabase credentials. Set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY in your .env file.');
	}

	if (!client) {
		client = createClient(supabaseUrl, supabaseAnonKey, {
			auth: {
				persistSession: false
			}
		});
	}

	return client;
}
