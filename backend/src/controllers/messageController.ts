import { Request, Response } from 'express';
import { allMessage, messageById } from '../services/messageService';

export const getMessageById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  messageById(id)
    .then(message => res.json(message))
    .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
};

export const getAllMessages = (req: Request, res: Response) => {
  allMessage()
    .then(message => res.json(message))
    .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
};