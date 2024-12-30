import { Request, Response } from 'express';
import { mockDBUsers } from '../models/user';


export const getOneUser = async (req: Request, res: Response) => {
  res.json(mockDBUsers[Math.floor(Math.random() * (mockDBUsers.length - 1))])
}

export const getAllUsers = async (req: Request, res: Response) => {
  res.json(mockDBUsers)
}
