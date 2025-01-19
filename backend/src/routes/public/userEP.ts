import express from 'express';
import { getAllUsers, getOneUser, postUser } from '../../controllers/user';

export const publicUserEP = express.Router();

publicUserEP.route('/user')
  .post(postUser)
  .get(getAllUsers)

publicUserEP.route('/user/:name')
  .get(getOneUser)
  