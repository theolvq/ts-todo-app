import { Router } from 'express';
import {
  createCard,
  deleteCard,
  getAllCards,
  getCard,
  updateCard,
} from '../controllers/card';

const router = Router();

router.get('/', getAllCards);

router.get('/:id', getCard);

router.post('/', createCard);

router.put('/:id', updateCard);

router.delete('/:id', deleteCard);

export default router;
