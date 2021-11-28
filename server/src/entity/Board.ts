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

  @ManyToOne((type) => Card, (card) => card.board) // eslint-disable-line no-unused-vars
  cards: Card[];

  @OneToMany((type) => BoardColumn, (column) => column.board) // eslint-disable-line no-unused-vars
  boardColumns: BoardColumn[];
}
