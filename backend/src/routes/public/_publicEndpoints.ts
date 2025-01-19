import express, { Request, Response } from 'express';
import { publicEventEndpoints } from './eventEndpoints';
import { publicUserEP } from './userEP';
import { publicTestEP } from './testEP';
import { publicPowerTypesEP } from './powertypesEP';

export const publicEndpoints = express.Router();


publicEndpoints.use('/public/',
  publicEventEndpoints,
  publicUserEP,
  publicTestEP,
  publicPowerTypesEP,
)
