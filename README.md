# deno-deamon

[![Build Status](https://github.com/manyuanrong/deno-deamon/workflows/CI/badge.svg)](https://github.com/manyuanrong/deno-deamon/actions)

Make the Deno program run in the background

Example

```ts
import deamon from "https://raw.githubusercontent.com/manyuanrong/deno-deamon/master/mod.ts"

// before your program
deamon() // run in background

// other program...
```