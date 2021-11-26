import { Router } from 'express';
import { Project, Todo } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: [
        {
          model: Todo,
        },
      ],
    });
    res.json(projects);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Todo,
        },
      ],
    });
    res.json(project);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const project = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(project);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json(project);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
