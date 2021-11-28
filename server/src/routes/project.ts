import { Router } from 'express';
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProject,
  updateProject,
} from '../controllers/project';

const router = Router();

router.get('/', getAllProjects);

router.get('/:id', getProject);

router.post('/', createProject);

router.put('/:id', updateProject);

router.delete('/:id', deleteProject);

export default router;
