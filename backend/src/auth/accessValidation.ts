import express, { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/user";
import { userIdFromToken } from "./accessToken";


export const accessGlobal  = (role: string): (req: Request, res: Response, next: NextFunction) => void => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = userIdFromToken(req.headers.authorization)

      const userIfFound = await UserModel.findOne({userId})

      if(!userIfFound)
        throw new Error("No no user matches token")

      if(!userIfFound.roles || !userIfFound.roles.some(userRole => userRole.toLowerCase() === role.toLowerCase()))
        throw new Error("Unauthorized")

      next()
      
    } catch (err) {
      res.status(401).json({error: (err as Error)?.message || ""});
    }
  }
}

