import bcrypt from "bcrypt";

export interface IUser {
  email: string;
  password: string;
  username: string;
}

export default class User {
  users: IUser[] = [];

  async initUsers() {
    const p = await bcrypt.hash("abc", 10);
    this.users = [
      {email: "bojack@wesleyan.com", password: p, username: "horse_professor"}
    ];
  }

  findUser(email: string) {
    return this.users.find(u => u.email === email);
  } 
}
