import axios from 'axios';
import { Todo } from '../types';

const SERVER_URL = process.env.SERVER_URL;

// Get all todos
export const getTodos = async () => {
  const { data } = await axios.get(`/api/todos`);
  return data;
};

// Get a todo by id
export const getTodoById = async (id: string) => {
  const { data } = await axios.get(`/api/todos/${id}`);
  return data;
};

// Create a new todo
export const createTodo = async (todo: Todo) => {
  const { data } = await axios.post(`/api/todos`, todo);
  return data;
};

// Update a todo
export const updateTodo = async (todo: Todo) => {
  const { data } = await axios.put(`/api/todos/${todo.id}`, todo);
  return data;
};

// Delete a todo
export const deleteTodo = async (id: string) => {
  await axios.delete(`/api/todos/${id}`);
};

const todoService = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default todoService;
