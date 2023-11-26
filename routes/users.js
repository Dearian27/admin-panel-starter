import express from 'express';
import { getUsers, createUser, deleteUser } from '../controllers/users.js';

const router = express.Router();
router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);

export default router;
