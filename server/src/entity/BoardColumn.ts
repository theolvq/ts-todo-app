/* eslint-disable indent */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Board from './Board';
import Card from './Card';

@Entity()
export default class BoardColumn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => Board, (board) => board.boardColumns) // eslint-disable-line no-unused-vars
  board: Board;

  @OneToMany((type) => Card, (card) => card.column) // eslint-disable-line no-unused-vars
  cards: Card[];
}
