import { NextFunction, Request, Response } from "express";
import { IUser, UserModel } from "../models/user";
import { generateAccessToken, getUserIdFromToken } from "../auth/accessToken";
import { comparePassword } from "../auth/hashing";
import { EventModel, IEvent } from "../models/event";
import { CommunityMemberModel, ICommunityMember } from "../models/communityMember";


export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userIfFound = await UserModel.findOne({ email: req.body.email });
    if (!userIfFound){
      res.status(400).json({ msg: "user does not exist" });
      return
    }

    if (!comparePassword(req.body.password, userIfFound.hashedPwd)){
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



interface IOptions {
  hasGlobalRole: string
  hasCommunityRole: string,
  isEventCreator: boolean
}
export class Validator {
  private foundUser: IUser | null | undefined;
  private foundCommunityMember: ICommunityMember | null | undefined;
  private foundEvent: IEvent | null | undefined;
  private errorMsg = "";


  public validate(typeOfValidations: Partial<IOptions>) {

    return async (req: Request, res: Response, next: NextFunction) => {
      const authHeader = req.headers["authorization"]

      if(!authHeader) {
        res.status(403).json({ msg: "No authorization header." })
        return
      }

      let userId = "";
      try {
        userId = getUserIdFromToken(authHeader)
      } catch (err) {
        res.status(403).json({ msg: (err as Error).message, token: authHeader })
        return
      }
      
      const communityId = req.body.communityId
      const eventId = req.body.eventId
      console.log({body: req.body})

      // Check for global role - should probably always check for god user
      if(!!typeOfValidations.hasGlobalRole) {
        if(await this.hasGlobalRole(userId, typeOfValidations.hasGlobalRole)) {
          next()
          return
        }

        this.errorMsg = "missing global role."
      }

      // Check for community role
      if(!!typeOfValidations.hasCommunityRole) {
        if(!communityId) {
          res.status(403).json({ msg: "No communityId was provided." })
          return
        }

        if(!!(await this.hasCommunityRole(userId, communityId, typeOfValidations.hasCommunityRole))) {
          next()
          return
        }

        this.errorMsg = "missing community role."
      }

      // Check if user is the eventCreator for specified event
      if(!!typeOfValidations.isEventCreator) {
        if(!eventId) {
          res.status(403).json({ msg: "No eventId was provided." })
          return
        }

        if(!!(await this.isEventCreator(userId, eventId))) {
          next()
          return
        }

        this.errorMsg = "not event creator."
      }

      res.status(403).json({ msg: `Unauthorized: ${this.errorMsg}` })
      return
    }
  }



  private async setFoundUser(userId: string) {
    this.foundUser = await UserModel.findOne({ userId })
  }

  private async setFoundEvent(eventId: string) {
    this.foundEvent = await EventModel.findOne({ eventId })
  }

  private async setFoundCommunityMember(userId: string, communityId: string) {
    this.foundCommunityMember = await CommunityMemberModel.findOne({ userId, communityId })
  }


  private hasGlobalRole = async (userId: string, role: string) => {
    if(!this.foundUser)
      await this.setFoundUser(userId);
  
    if(!this.foundUser)
      return false;
  
    if(!this.foundUser.roles?.some(r => r !== role))
      return false;
  
    return true;
  }


  private hasCommunityRole = async (userId: string, communityId: string, role: string) => {
    if(!this.foundCommunityMember)
      await this.setFoundCommunityMember(userId, communityId);
  
    if(!this.foundCommunityMember)
      return false;
  
    if(!this.foundCommunityMember.roles.some(r => r !== role))
      return false;
  
    return true
  }


  private isEventCreator = async (userId: string, eventId: string) => {



    if(!this.foundUser)
      await this.setFoundUser(userId);

    console.log("hey", userId, this.foundUser?.userId)

    if(!this.foundUser)
      return false;

    if(!this.foundEvent)
      await this.setFoundEvent(eventId);

    if(!this.foundEvent)
      return false;
  
    console.log(this.foundEvent.creatorId.toString(), userId)

    if(this.foundEvent.creatorId.toString() !== userId)
      return false;
  
    return true;
  }
}



// Dev test controllers

export const testUserRole = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: "success"})
}

export const testIsEventCreator = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: "success"})
}

export const testCommunityRole = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: "success"})
}
