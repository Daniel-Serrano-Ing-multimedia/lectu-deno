export const config = await Deno.env.toObject();
export {config} from "https://deno.land/x/dotenv/mod.ts";
export const PORT = 4000;