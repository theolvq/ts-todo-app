import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import Todo from '../entity/todo';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const todoRepository = getRepository(Todo);
  try {
    const allTodos = await todoRepository.find();
    res.json(allTodos);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const todoRepository = getRepository(Todo);
  try {
    const todo = await todoRepository.findOne(req.params.id);
    res.json(todo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const todoRepository = getRepository(Todo);

  try {
    const todo = await todoRepository.create(req.body);
    const savedTodo = await todoRepository.save(todo);
    res.status(201).json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put('/:id', async (req, res) => {
  const todoRepository = getRepository(Todo);

  try {
    const todo = await todoRepository.findOne(req.params.id);
    if (!todo) return;
    todoRepository.merge(todo, req.body);
    const savedTodo = await todoRepository.save(todo);
    res.status(201).json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  const todoRepository = getRepository(Todo);

  try {
    const todo = await todoRepository.delete(req.params.id);
    res.status(204).json(todo);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
