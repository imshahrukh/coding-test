// controllers/userController.ts
import { Request, Response } from 'express';
import { allUser, userById } from '../services/userService';

export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  userById(id)
    .then(user => res.json(user))
    .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
};
export const getAllUsers = (req: Request, res: Response) => {
  allUser()
    .then(user => res.json(user))
    .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
};
