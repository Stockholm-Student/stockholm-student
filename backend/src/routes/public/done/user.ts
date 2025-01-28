import express from 'express';
import { getAllUsers, getOneUser, postUser } from '../../../controllers/done/user';

export const publicUsers = express.Router();

publicUsers.route('/users')
  .post(postUser)
  .get(getAllUsers)

publicUsers.route('/users/:userId')
  .get(getOneUser)
  