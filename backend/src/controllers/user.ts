import { Request, Response } from 'express';
import { UserModel } from '../models/user';


export const postUser = async (req: Request, res: Response) => {
  try {
    const newUser = new UserModel({
      userId: crypto.randomUUID(), 
      ...req.body
    });
    console.log({ name: newUser.userName, userId: newUser.userId })
    
    await newUser.save();

    res.json({ msg: "success", data: newUser })
  } catch (error) {
    res.status(400).send({error : (error as Error)?.message || ""});
  }
}


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const foundUsers = (await UserModel.find()).map(userDoc => {
      return {
        ...userDoc.toObject(),
        userId: userDoc.userId.toString()
      }
    })

    res.json({
      msg: "success", 
      data: foundUsers
    })
  } catch (error) {
    res.json({ msg: "error", data: String(error)} )
  }
}


export const getOneUser = async (req: Request, res: Response) => {
  const foundDoc = await UserModel.findOne({userId: req.params.userId});

  try {
    res.json({ msg: "success", data: {
      ...foundDoc?.toObject(),
      userId: foundDoc?.userId.toString() 
    }})
  } catch (error) {
    res.json({ msg: "error", data: String(error)} )
  }
}
