import express, { Request, Response } from 'express';
import { secureEventEndpoints } from './eventEndpoints';
import { jwtCheck } from '../../auth/auth';
//import { validateUserMiddleware } from '../../auth/auth';

export const secureEndpoints = express.Router();


secureEndpoints.use(jwtCheck)
secureEndpoints.use('/secure/',
  secureEventEndpoints
)
