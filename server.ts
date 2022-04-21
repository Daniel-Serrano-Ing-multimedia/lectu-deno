import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((context) => {
  console.log("Hello World!");
  context.response.body =
        `<!DOCTYPE html>
				 <html lang="en">
				 <head>
			   <meta charset="UTF-8">
			   <meta name="viewport" content="width=device-width, initial-scale=1.0">
				 <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
			   <title>Sanity <-> Deno</title>
				 </head>
				 <body>
			   <div id="root">
	       <h1> Deno and React with Sanity</h1>
				 </div>
				 </body>
				 </html>`;
});


await app.listen({ port: 4000 });