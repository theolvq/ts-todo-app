/* eslint-disable indent */

import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Board from './Board';
import BoardColumn from './BoardColumn';
import Todo from './Todo';

@Entity()
export default class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Board, (board) => board.cards)
  board: Board;

  @ManyToOne(() => BoardColumn, (column) => column.cards)
  column: BoardColumn;

  @OneToMany(() => Todo, (todo) => todo.card)
  todos: Todo[];
}
