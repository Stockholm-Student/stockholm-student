import express from 'express';
import { getAllEvents, getOneEvent, postEvent } from '../controllers/event';

export const eventEndpoints = express.Router();

eventEndpoints.route('/events')
  .get(getAllEvents)
  .post(postEvent)

eventEndpoints.route('/events/:eventId')
  .get(getOneEvent)
