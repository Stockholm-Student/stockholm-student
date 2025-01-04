import express from 'express';
import { getAllEvents } from '../../controllers/event';

export const publicEventEndpoints = express.Router();

publicEventEndpoints.route('/events')
  .get(getAllEvents)
