import express, { Request, Response } from 'express';
import { publicEventEndpoints } from './eventEndpoints';
import { validateUserMiddleware } from '../../auth/auth';
import { epLogin } from './login';

export const publicEndpoints = express.Router();

publicEndpoints.use(validateUserMiddleware)
publicEndpoints.use('/public/',
  publicEventEndpoints,
  epLogin
)
