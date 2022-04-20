import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();

app
  .get("/hello", (c) => {
    return "Hello, Abc!";
  })
  .start({ port: 4000 });