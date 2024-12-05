import { IEvent } from "./event"

export interface IUser {
  // _id: string,
  // Username: string, // My suggestion
  // hashedPwd: string,
  firstName: string,
  // lastName: string,
  // role: string,
  // university: string,
  // country: string,
  // joinDate: Date,
  // interests: string[],
  // attendedEvents: IEvent[] //string[] of Ids?
  // createdEvents: IEvent[] //string[] of Ids?
}

export const mockDBUsers: IUser[] = [
  { firstName: "Martin" },
  { firstName: "Johannes" },
  { firstName: "Jan" },
  { firstName: "Widad" },
]

