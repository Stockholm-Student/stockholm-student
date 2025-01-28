import express, { Request, Response } from 'express';
import { publicEvents } from './event';
import { publicUsers } from './done/user';
import { publicHealth } from './testEP';
import { publicCountries, publicUniversities } from './done/powerTypes';
import { publicCategories } from './category';

export const publicEndpoints = express.Router();


publicEndpoints.use('/public/',
  publicEvents,
  publicUsers,
  publicHealth,
  publicCountries, 
  publicUniversities,
  publicCategories
)
