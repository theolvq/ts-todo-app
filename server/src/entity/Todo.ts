/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Card from './Card';

@Entity()
export default class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  todo: string;

  @Column({ default: false })
  isDone: boolean;

  @Column({ nullable: true })
  cardId: number;

  @ManyToOne(() => Card, (card) => card.todos)
  card: Card;
}
