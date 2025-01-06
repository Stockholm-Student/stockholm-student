// import bcrypt from "bcrypt";


import { Request, Response } from 'express';
import { mockDBUsers } from '../models/user';

export const getOneUser = async (req: Request, res: Response) => {
  res.json(mockDBUsers[Math.floor(Math.random() * (mockDBUsers.length - 1))])
}

export const getAllUsers = async (req: Request, res: Response) => {
  res.json(mockDBUsers)
}




// export default class User {
//   users: IUser[] = [];

//   async initUsers() {
//     const p = await bcrypt.hash("abc", 10);
//     this.users = [
//       {email: "bojack@wesleyan.com", password: p, username: "horse_professor"}
//     ];
//   }

//   findUser(email: string) {
//     return this.users.find(u => u.email === email);
//   } 
// }
