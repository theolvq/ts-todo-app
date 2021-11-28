import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Project from '../entity/Project';

export const getAllProjects = async (req: Request, res: Response) => {
  const projectRepository = getRepository(Project);
  try {
    const projects = await projectRepository.find({ relations: ['todos'] });
    res.json(projects);
  } catch (err) {
    res.json({ message: err });
  }
};

export const getProject = async (req: Request, res: Response) => {
  const projectRepository = getRepository(Project);

  try {
    const project = await projectRepository.findOne(req.params.id, {
      relations: ['todos'],
    });
    res.json(project);
  } catch (err) {
    res.json({ message: err });
  }
};

export const createProject = async (req: Request, res: Response) => {
  const projectRepository = getRepository(Project);

  try {
    const project = await projectRepository.create(req.body);
    const savedProject = await projectRepository.save(project);
    res.status(201).json(savedProject);
  } catch (err) {
    res.json({ message: err });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  const projectRepository = getRepository(Project);

  try {
    const project = await projectRepository.findOne(req.params.id);
    if (!project) return;
    projectRepository.merge(project, req.body);
    const savedProject = await projectRepository.save(project);
    res.status(201).json(savedProject);
  } catch (err) {
    res.json({ message: err });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  const projectRepository = getRepository(Project);

  try {
    const project = await projectRepository.findOne(req.params.id);
    if (!project) return;
    projectRepository.merge(project, req.body);
    const savedProject = await projectRepository.save(project);
    res.status(201).json(savedProject);
  } catch (err) {
    res.json({ message: err });
  }
};
