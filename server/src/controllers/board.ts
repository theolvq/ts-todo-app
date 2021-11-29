import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Board from '../entity/Board';

export const getAllBoards = async (req: Request, res: Response) => {
  const boardRepository = getRepository(Board);
  try {
    const boards = await boardRepository.find();
    res.status(200).json(boards);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

export const getBoard = async (req: Request, res: Response) => {
  const boardRepository = getRepository(Board);
  try {
    const board = await boardRepository.findOne(req.params.id);
    res.status(200).json(board);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

export const createBoard = async (req: Request, res: Response) => {
  const boardRepository = getRepository(Board);

  const newBoard = boardRepository.create(req.body);
  try {
    const savedBoard = await boardRepository.save(newBoard);
    res.status(201).json(savedBoard);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

export const updateBoard = async (req: Request, res: Response) => {
  const boardRepository = getRepository(Board);

  try {
    const board = await boardRepository.findOne(req.params.id);
    if (!board) return;
    boardRepository.merge(board, req.body);
    const savedBoard = await boardRepository.save(board);
    res.status(201).json(savedBoard);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

export const deleteBoard = async (req: Request, res: Response) => {
  const boardRepository = getRepository(Board);
  try {
    await boardRepository.delete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.json({ message: err });
  }
};
