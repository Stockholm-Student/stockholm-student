import { NextFunction, Request, Response } from "express";
import { generateAccessToken } from "../auth/accessToken";



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