import { Request, Response } from 'express';
import { EventModel } from '../models/event';


export const postEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = new EventModel({
      eventId: crypto.randomUUID(), 
      ...req.body
    });
    
    await newEvent.save();

    res.json({ msg: "success", data: newEvent })
  } catch (error) {
    res.status(400).send({error : (error as Error)?.message || ""});
  }
}

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    res.json({ 
      msg: "success", 
      data: (await EventModel.find()).map(eventDoc => { return {
        ...eventDoc.toObject(),
        eventId: eventDoc.eventId.toString()
      }})
    })
  } catch (error) {
    res.json({ msg: "error", data: String(error)} )
  }
}

export const getOneEvent = async (req: Request, res: Response) => {
  try {

    const foundDoc = await EventModel.findOne({eventId: req.params.eventId})

    res.json({ msg: "success", data: {
      ...foundDoc?.toObject(),
      eventId: foundDoc?.eventId.toString()
    }})
  } catch (error) {
    res.json({ msg: "error", data: String(error)} )
  }
}
