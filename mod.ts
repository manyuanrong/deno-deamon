export default function deamon(): number {
    if (!Deno.env("__deamon")) {
      const args = [...Deno.args];
      const script = "./" + args.shift();
      const env = { ...Deno.env(), __deamon: "true" };
      Deno.run({
        args: [Deno.execPath(), "run", "--allow-all", script, ...args],
        env,
        stdout: "null",
        stdin: "null",
        stderr: "null"
      });
      Deno.exit();
    } else {
      return Deno.pid;
    }
  }
  