const SUPABASE_URL = "https://rmzdjxorzkoehwhzijoz.supabase.co";

const SUPABASE_KEY = "SUA_CHAVE_PUBLISHABLE";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
