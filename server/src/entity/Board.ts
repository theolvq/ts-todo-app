/* eslint-disable indent */

import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Card from './Card';
import BoardColumn from './BoardColumn';

@Entity()
export default class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Card, (card) => card.board)
  cards: Card[];

  @OneToMany(() => BoardColumn, (column) => column.board)
  boardColumns: BoardColumn[];
}
