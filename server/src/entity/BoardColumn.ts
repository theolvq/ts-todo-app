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

  @ManyToOne(() => Board, (board) => board.boardColumns)
  board: Board;

  @OneToMany(() => Card, (card) => card.column)
  cards: Card[];
}
