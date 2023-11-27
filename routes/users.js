import express from 'express';
import { getUsers, createUser, deleteUser } from '../controllers/users.js';
import { verifyToken } from '../controllers/verifyToken.js';

const router = express.Router();
router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id', verifyToken, deleteUser);

export default router;
