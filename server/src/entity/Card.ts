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

  @OneToMany(() => Board, (board) => board.cards)
  board: Board;

  @ManyToOne(() => BoardColumn, (column) => column.cards)
  column: BoardColumn;
}
