import { Connection } from 'typeorm';
import Project from './entity/project';
import Todo from './entity/todo';

const seed = async (connection: Connection) => {
  const firstTodo = new Todo();
  firstTodo.todo = 'Build api';
  firstTodo.isDone = false;

  await connection.manager.save(firstTodo);

  const secondTodo = new Todo();
  secondTodo.todo = 'Build Database';
  secondTodo.isDone = false;

  await connection.manager.save(secondTodo);

  const firstProject = new Project();
  firstProject.name = 'Build Backend';
  firstProject.deadline = new Date('2021-12-12');
  firstProject.todos = [firstTodo, secondTodo];

  await connection.manager.save(firstProject);

  const thirdTodo = new Todo();
  thirdTodo.todo = 'Build UI';
  thirdTodo.isDone = false;

  await connection.manager.save(thirdTodo);

  const fourthTodo = new Todo();
  fourthTodo.todo = 'Build connection to backend';
  fourthTodo.isDone = false;
  await connection.manager.save(fourthTodo);

  const secondProject = new Project();
  secondProject.name = 'Build Frontend';
  secondProject.deadline = new Date('2021-12-12');
  secondProject.todos = [thirdTodo, fourthTodo];

  await connection.manager.save(secondProject);
};

export default seed;
