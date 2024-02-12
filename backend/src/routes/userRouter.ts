import * as express from 'express';
import { getAllUsers, getUserById } from '../controllers/userController';

const router = express.Router();
router.get('/getAllUsers', getAllUsers);
router.get('/:id', getUserById);

export default router;