import { Request, Response } from 'express';
import { Todo } from '../models/Todo.mjs';

const todos: Todo[] = [
    new Todo('Learn TypeScript', true),
    new Todo('Learn Express'),
    new Todo('Learn MongoDB')
];

export const getTodos = (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        if (!id) {
            res.status(200).json(todos);
        }

        const todo = todos.find(todo => todo.getID() === +id);

        if (!todo) {
            res.status(404).json({ status: 'Todo not found' });
        }

        res.status(200).json(todo);
        
    } catch (error) {
        res.status(500).send(error);   
    }
};

export const createTodo = (req: Request, res: Response) => {
    const { task } = req.body;

    try {
        if (!task) {
            res.status(200).json({ status: 'Task is required' });
        }

        todos.push(new Todo(task));
        res.status(201).json(todos[todos.length - 1]);
    } catch (error) {     
        res.status(500).send(error);
    }
};

export const updateTodo = (req: Request, res: Response) => {
    const { id } = req.params;
    const { task, done } = req.body;

    try {
        if (!id) {
            res.status(200).json({ status: 'ID is required' });
        }

        const todo = todos.find(todo => todo.getID() === +id);

        if (!todo) {
            res.status(404).json({ status: 'Todo not found' });
        } else {
            if (task) {
                todo.task = task;
            }

            if (done !== undefined) {
                todo.done = done;
            }

            res.status(200).json(todo);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteTodo = (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        if (!id) {
            res.status(200).json({ status: 'ID is required' });
        }

        const index = todos.findIndex(todo => todo.getID() === +id);

        if (index === -1) {
            res.status(404).json({ status: 'Todo not found' });
        } else {
            res.status(200).json(todos.splice(index, 1)[0]);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}