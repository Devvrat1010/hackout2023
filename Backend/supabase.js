require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://zasbgrumjgmfrnowcabo.supabase.co";
const supabaseKey = process.env.KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
