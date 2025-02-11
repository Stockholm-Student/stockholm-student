import express, { Response } from 'express';
import { getTokenForUser, googleCallback, loginUser, testAuth } from '../controllers/auth';
import { passportValidation } from '../auth/authPassport';
import passport from 'passport';
import { postUser } from '../controllers/user';

export const authEndpoints = express.Router();


authEndpoints
  .get('/auth/test', passportValidation, testAuth)
  .post('/auth/local/login', loginUser)
  .post('/auth/local/signup', postUser)

