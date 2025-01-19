import { Request, Response } from 'express';
import { UserModel } from '../models/user';
import { dbConnection } from '../db/dbConnect';


const connection = dbConnection

export const postUser = async (req: Request, res: Response) => {
  try {

    const newUUID = crypto.randomUUID()
    console.log(newUUID);

    const newUser = new UserModel({
      userId: newUUID, 
      ...req.body
    });
    

    await newUser.save();
    res.json({ msg: "success", data: newUser })
  } catch (error) {
    res.status(400).send({error : (error as Error)?.message || ""});
  }
}

export const getOneUser = async (req: Request, res: Response) => {
  res.json({})
}

export const getAllUsers = async (req: Request, res: Response) => {
  res.json({})
}
