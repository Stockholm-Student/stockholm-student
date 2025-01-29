import express, { Response } from 'express';
import { getTokenForUser, loginUser, testAuth } from '../controllers/auth';
import { passportValidation } from '../auth/authPassport';


export const authEndpoints = express.Router();



authEndpoints
  .get('/auth/test', passportValidation, testAuth)
  .post('/auth/login', loginUser)
  .get('/auth/getToken/:userId', getTokenForUser)
