import { assertEquals } from "https://deno.land/std@v0.24.0/testing/asserts.ts";
import { runTests, test } from "https://deno.land/std@v0.24.0/testing/mod.ts";

test("http server run in background", async function() {
  Deno.run({
    args: ["deno", "run", "-A", "test_server.ts"]
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  const res = await fetch("http://127.0.0.1:8000");
  const { message, pid } = await res.json();
  assertEquals(message, "Hello World");

  Deno.kill(pid, 9);
});

runTests();
