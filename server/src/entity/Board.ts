/* eslint-disable indent */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Card from './Card';
import BoardColumn from './BoardColumn';

@Entity()
export default class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Card, (card) => card.board)
  cards: Card[];

  @OneToMany(() => BoardColumn, (column) => column.board)
  boardColumns: BoardColumn[];
}
