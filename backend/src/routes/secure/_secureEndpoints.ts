import express, { NextFunction, Request, Response } from 'express';
import { secureEventEndpoints } from './eventEndpoints';
// import { jwtCheck } from '../../auth/authAuthO';

export const secureEndpoints = express.Router();


//secureEndpoints.use(jwtCheck)
secureEndpoints.use('/secure/',
  secureEventEndpoints
)
