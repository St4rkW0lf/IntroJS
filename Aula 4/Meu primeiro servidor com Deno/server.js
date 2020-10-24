import { serve } from "https://deno.land/std@0.74.0/http/server.ts";

const port = 5150;
const body = await Deno.readTextFile('./municipios.csv');

const s = serve({ port });
console.log(`http://localhost:${port}/`);
for await (const req of s) {
  req.respond({ body });
}