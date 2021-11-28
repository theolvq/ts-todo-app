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

@Entity()
export default class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  list: string;

  @OneToMany((type) => Board, (board) => board.cards) // eslint-disable-line no-unused-vars
  board: Board;

  @ManyToOne((type) => BoardColumn, (column) => column.cards) // eslint-disable-line no-unused-vars
  column: BoardColumn;
}
