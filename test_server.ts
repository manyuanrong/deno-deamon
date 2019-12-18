import { serve } from "https://deno.land/std@v0.24.0/http/server.ts";
import deamon from "./mod.ts";

const pid = deamon();

const body = new TextEncoder().encode(
  `${JSON.stringify({
    message: "Hello World",
    pid
  })}`
);
const s = serve({ port: 8000 });

for await (const req of s) {
  req.respond({ body });
}
