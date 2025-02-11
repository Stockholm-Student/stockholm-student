import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const PEPPER = process.env.PEPPER_SECRET || "";
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || "10", 10);

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(
    password + PEPPER, 
    await bcrypt.genSalt(SALT_ROUNDS)
  )

  // const salt = await bcrypt.genSalt(SALT_ROUNDS);
  // const hashedPassword = await bcrypt.hash(password + PEPPER, salt);
  // return hashedPassword;
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password + PEPPER, hash);
};
