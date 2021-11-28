/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Todo from './todo';

@Entity()
export default class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  deadline: Date;

  @OneToMany((type) => Todo, (todo) => todo.project) // eslint-disable-line no-unused-vars
  todos: Todo[];
}
