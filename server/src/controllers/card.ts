import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Card from '../entity/Card';

export const getAllCards = async (req: Request, res: Response) => {
  const cardRepository = getRepository(Card);
  try {
    const cards = await cardRepository.find();
    res.status(200).json(cards);
  } catch (err) {
    res.json({ message: err });
  }
};

export const getCard = async (req: Request, res: Response) => {
  const cardRepository = getRepository(Card);
  try {
    const card = await cardRepository.findOne(req.params.id);
    res.status(200).json(card);
  } catch (err) {
    res.json({ message: err });
  }
};

export const createCard = async (req: Request, res: Response) => {
  const cardRepository = getRepository(Card);

  const newCard = cardRepository.create(req.body);
  try {
    const savedCard = await cardRepository.save(newCard);
    res.status(201).json(savedCard);
  } catch (err) {
    res.json({ message: err });
  }
};

export const updateCard = async (req: Request, res: Response) => {
  const cardRepository = getRepository(Card);

  try {
    const card = await cardRepository.findOne(req.params.id);
    if (!card) return;
    cardRepository.merge(card, req.body);
    const savedCard = await cardRepository.save(card);
    res.status(201).json(savedCard);
  } catch (err) {
    res.json({ message: err });
  }
};

export const deleteCard = async (req: Request, res: Response) => {
  const cardRepository = getRepository(Card);
  try {
    await cardRepository.delete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.json({ message: err });
  }
};
