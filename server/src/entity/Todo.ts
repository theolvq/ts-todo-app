/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Project from './Project';

@Entity()
export default class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  todo: string;

  @Column({ default: false })
  isDone: boolean;

  @Column({ nullable: true })
  projectId: number;

  @ManyToOne((type) => Project, (project) => project.todos) // eslint-disable-line no-unused-vars
  project: Project;
}
