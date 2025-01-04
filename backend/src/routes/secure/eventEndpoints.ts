import express from 'express';
import { getAllEvents } from '../../controllers/event';

export const secureEventEndpoints = express.Router();

secureEventEndpoints.route('/events')
  .get(getAllEvents)
