import { NextFunction, Request, Response } from "express";

import { UserModel } from "../models/user";
import { generateAccessToken } from "../auth/accessToken";


export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userIfFound = await UserModel.findOne({ email: req.body.email });
    if (!userIfFound){
      res.status(400).json({ msg: "user does not exist" });
      return
    }

    if (userIfFound.hashedPwd !== req.body.hashedPwd){
      res.status(400).json({ msg: "incorrect password" });
      return
    }

    const accessToken = generateAccessToken({
      userId: userIfFound.userId.toString(),
    })

    res
      .status(200)
      .json({ msg: "user logged in", accessToken: accessToken });

  } catch (error) {
    console.log(error);
    res.json(error);
  }
} 


export const testAuth = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: "Successful auth" });
}


export const getTokenForUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log({userId: req.params.userId})
    res.json({ msg: "success", token: generateAccessToken({userId: req.params.userId}) });
  } catch (error) {
    res.json({ msg: String(error)})
  }
}


export const googleCallback = async (req: Request, res: Response, next: NextFunction) => {
  console.log("googleCallback:")
  console.log("user:", req.user)

  if(!req.user || !req.user) {
    // next(new Error("no user"))
    res.json({msg: "no user"})
    return;
  }

  // return next(new Error("not implemented"))

  res.json({msg: "not implemented"})

  //const token = generateAccessToken({ id: req.user.id })
  
  //jwt.sign({ id: req.user.id }, process.env.JWT_SECRET);
  //res.redirect(`/login-success?token=${token}`);
}
