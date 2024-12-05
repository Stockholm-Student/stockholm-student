import express, { Request, Response } from 'express';
import { publicEventEndpoints } from './eventEndpoints';

export const publicEndpoints = express.Router();


publicEndpoints.use('/public/',
  publicEventEndpoints,
)
