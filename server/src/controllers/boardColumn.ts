import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import BoardColumn from '../entity/BoardColumn';

export const getAllBoardColumns = async (req: Request, res: Response) => {
  const boardColumnRepository = getRepository(BoardColumn);
  try {
    const boardColumns = await boardColumnRepository.find();
    res.status(200).json(boardColumns);
  } catch (err) {
    res.json({ message: err });
  }
};

export const getBoardColumn = async (req: Request, res: Response) => {
  const boardColumnRepository = getRepository(BoardColumn);
  try {
    const boardColumn = await boardColumnRepository.findOne(req.params.id);
    res.status(200).json(boardColumn);
  } catch (err) {
    res.json({ message: err });
  }
};

export const createBoardColumn = async (req: Request, res: Response) => {
  const boardColumnRepository = getRepository(BoardColumn);

  const newBoardColumn = boardColumnRepository.create(req.body);
  try {
    const savedBoardColumn = await boardColumnRepository.save(newBoardColumn);
    res.status(201).json(savedBoardColumn);
  } catch (err) {
    res.json({ message: err });
  }
};

export const updateBoardColumn = async (req: Request, res: Response) => {
  const boardColumnRepository = getRepository(BoardColumn);

  try {
    const boardColumn = await boardColumnRepository.findOne(req.params.id);
    if (!boardColumn) return;
    boardColumnRepository.merge(boardColumn, req.body);
    const savedBoardColumn = await boardColumnRepository.save(boardColumn);
    res.status(201).json(savedBoardColumn);
  } catch (err) {
    res.json({ message: err });
  }
};

export const deleteBoardColumn = async (req: Request, res: Response) => {
  const boardColumnRepository = getRepository(BoardColumn);
  try {
    await boardColumnRepository.delete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.json({ message: err });
  }
};
