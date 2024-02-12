import * as express from 'express';
import { getAllMessages, getMessageById } from '../controllers/messageController';

const router = express.Router();
router.get('/getAllMessages', getAllMessages);
router.get('/:id', getMessageById);

export default router;