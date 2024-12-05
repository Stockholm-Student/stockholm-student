import { Request, Response } from 'express';
import { mockDBEvents } from '../models/event';

export const getOneEvent = async (req: Request, res: Response) => {
  res.json(mockDBEvents[Math.floor(Math.random() * (mockDBEvents.length - 1))])
}

export const getAllEvents = async (req: Request, res: Response) => {
  res.json(mockDBEvents)
}