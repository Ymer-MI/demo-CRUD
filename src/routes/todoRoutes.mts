import express from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todoController.mjs';

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getTodos);

router.post('/', createTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;