import { Router } from 'express';
import {
  createBoardColumn,
  deleteBoardColumn,
  getAllBoardColumns,
  getBoardColumn,
  updateBoardColumn,
} from '../controllers/boardColumn';

const router = Router();

router.get('/', getAllBoardColumns);
router.get('/:id', getBoardColumn);
router.post('/', createBoardColumn);
router.put('/:id', updateBoardColumn);
router.delete('/:id', deleteBoardColumn);

export default router;
