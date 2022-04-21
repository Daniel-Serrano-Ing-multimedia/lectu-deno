import { Router } from "https://deno.land/x/oak/mod.ts";
import { addTodo,getTotdos } from "../controllers/todos.controller.ts"; // Import controller methods

export const router = new Router()
  //Todo routes
  .post("/api/todos", addTodo)
  .get("/api/todos/", getTotdos);