import express from 'express';
import { getAllEvents, getOneEvent, postEvent } from '../../controllers/event';

export const publicEvents = express.Router();

publicEvents.route('/events')
  .get(getAllEvents)
  .post(postEvent)

publicEvents.route('/events/:eventId')
  .get(getOneEvent)
