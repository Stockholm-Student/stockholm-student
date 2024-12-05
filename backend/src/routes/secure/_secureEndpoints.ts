import express, { Request, Response } from 'express';
import { secureEventEndpoints } from './eventEndpoints';
import { validateUserMiddleware } from '../../auth/auth';

export const secureEndpoints = express.Router();


secureEndpoints.use(validateUserMiddleware)
secureEndpoints.use('/secure/',
  secureEventEndpoints
)
