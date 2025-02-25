import { Request, Response } from 'express'
import { IUser, UserModel } from '../models/user'
import { hashPassword } from '../auth/hashing'
import { generateAccessToken } from '../auth/accessToken'



const createReturnUser = (userDoc: IUser) => {
  const returnVal = userDoc.toObject()

  delete returnVal.hashedPwd
  delete returnVal._id

  return {...returnVal,  userId: userDoc.userId.toString()}
}



export const postUser = async (req: Request, res: Response) => {
  try {
    const newUser = new UserModel({
      userId: crypto.randomUUID(),
      ...req.body,
      hashedPwd: await hashPassword(req.body.password), 
    })

    await newUser.save()

    res.json({
      msg: 'success', 
      data: createReturnUser(newUser),
      accessToken: generateAccessToken({
        userId: newUser.userId.toString(),
      })
    })
  } catch (error) {
    res.status(400).send({ error: (error as Error)?.message || '' })
  }
}



export const getAllUsers = async (_:Request, res: Response) => {
  try {
    res.json({
      msg: 'success',
      data: (await UserModel.find()).map(createReturnUser),
    })
  } catch (error) {
    res.status(400).send({ error: (error as Error)?.message || '' })
  }
}



export const getOneUser = async (req: Request, res: Response) => {
  try {
    const foundDoc = await UserModel.findOne({ userId: req.params.userId })

    if(!foundDoc) {
      res.json({ msg: "no user found", data: {} })
    }
    
    res.json({
      msg: 'success',
      data: {
        ...foundDoc?.toObject(),
        userId: foundDoc?.userId.toString(),
      },
    })
  } catch (error) {
    res.status(400).send({ error: (error as Error)?.message || '' })
  }
}
