import logger from '../utils/logger';
import db from './db';
import { Project, Todo } from './models';

const seed = async () => {
  await db.sync({ force: true });
  logger.info('db has synced');

  const project1 = await Project.create({
    name: 'build website',
    deadline: '2021-11-11',
  });

  const project2 = await Project.create({
    name: 'design website',
    deadline: '2021-12-12',
  });

  await Todo.create({
    projectId: project1.get('id'),
    todo: 'create database',
  });
  await Todo.create({
    projectId: project1.get('id'),
    todo: 'create UI',
  });
  await Todo.create({
    projectId: project1.get('id'),
    todo: 'create server',
  });

  await Todo.create({
    projectId: project2.get('id'),
    todo: 'design UI',
  });
  await Todo.create({
    projectId: project2.get('id'),
    todo: 'design UX',
  });
};

const runSeed = async () => {
  logger.info('seeding db');
  try {
    await seed();
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('closing db connection');
    await db.close();
    logger.info('db connection closed');
  }
};

runSeed();
