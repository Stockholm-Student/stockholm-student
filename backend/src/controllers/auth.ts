import express, { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import passport from "passport";
import { UserModel } from "../models/done/user";
import { json } from "stream/consumers";
import { generateAccessToken } from "../auth/authPassport";
//import "./passport.js";

//const authRouter = express.Router();






export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // check if user exists
    const userIfFound = await UserModel.findOne({ email: req.body.email });
    if (!userIfFound){
      res.status(400).json({ message: "user does not exist" });
      return
    }


    // check if password is correct
    if (userIfFound.hashedPwd !== req.body.hashedPwd){
      res.status(400).json({ message: "incorrect password" });
      return
    }


    // generate access token
    const accessToken = jwt.sign(
      {
        id: userIfFound.userId.toString(),
      },
      "secret",
      { expiresIn: "1d" }
    );


    res
      .status(200)
      .json({ message: "user logged in", accessToken: accessToken });

  } catch (error) {
    console.log(error);
    next(error);
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


