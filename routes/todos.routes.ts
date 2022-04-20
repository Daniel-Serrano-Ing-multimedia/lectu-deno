import { Router } from "https://deno.land/x/oak/mod.ts";
import { addTodo,getTotdos } from "../controllers/todos.controller.ts"; // Import controller methods

const router = new Router();

// Implement routes
router.post("/api/todos", addTodo); // Add a todo
router.get("/api/todos", getTotdos); // Add a todo

export default router;