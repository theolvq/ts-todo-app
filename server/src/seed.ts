import { Connection } from 'typeorm';
import Board from './entity/Board';
import BoardColumn from './entity/BoardColumn';
import Card from './entity/Card';
import Todo from './entity/Todo';

const seed = async (connection: Connection) => {
  const firstTodo = new Todo();
  firstTodo.todo = 'Build api';
  firstTodo.isDone = false;

  await connection.manager.save(firstTodo);

  const secondTodo = new Todo();
  secondTodo.todo = 'Build Database';
  secondTodo.isDone = false;

  await connection.manager.save(secondTodo);

  const thirdTodo = new Todo();
  thirdTodo.todo = 'Build UI';
  thirdTodo.isDone = false;

  await connection.manager.save(thirdTodo);

  const fourthTodo = new Todo();
  fourthTodo.todo = 'Build connection to backend';
  fourthTodo.isDone = false;

  await connection.manager.save(fourthTodo);

  const board = new Board();
  board.name = 'Todo App';

  await connection.manager.save(board);

  const todoCol = new BoardColumn();
  todoCol.name = 'Todo';
  todoCol.board = board;

  await connection.manager.save(todoCol);

  const doingCol = new BoardColumn();
  doingCol.name = 'Doing';
  doingCol.board = board;
  doingCol.cards = [];

  await connection.manager.save(doingCol);

  const doneCol = new BoardColumn();
  doneCol.name = 'Done';
  doneCol.board = board;
  doneCol.cards = [];

  await connection.manager.save(doneCol);

  const firstCard = new Card();
  firstCard.title = 'Todo';
  firstCard.description = 'This is a todo list';
  firstCard.column = todoCol;
  firstCard.todos = [firstTodo, secondTodo, thirdTodo, fourthTodo];
  firstCard.board = board;

  await connection.manager.save(firstCard);

  // delaying the save of todo column to make sure the card is saved first
  todoCol.cards = [firstCard];
  await connection.manager.save(todoCol);

  //
  board.cards = [firstCard];
  board.boardColumns = [todoCol, doingCol, doneCol];
  await connection.manager.save(board);
};

export default seed;
