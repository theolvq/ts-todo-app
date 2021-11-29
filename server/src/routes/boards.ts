import { Router } from 'express';
import {
  createBoard,
  getAllBoards,
  getBoard,
  updateBoard,
  deleteBoard,
} from '../controllers/board';

const router = Router();

router.get('/', getAllBoards);

router.get('/:id', getBoard);

router.post('/', createBoard);

router.put('/:id', updateBoard);

router.delete('/:id', deleteBoard);

export default router;
