import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { jwtStrategy } from "./strategies/jwt";
import { googleStrategy } from "./strategies/google";

dotenv.config();

passport.use(jwtStrategy);
passport.use(googleStrategy);

export const passportValidation = passport.authenticate(
  [
    'jwt',
    'google'
  ], 
  { 
    session: false 
  }
)


export const generateAccessToken = (idObj: {[key: string]: string}) => jwt.sign(
  idObj,
  process.env.PASSPORT_JWT_SECRET || "",
  { 
    expiresIn: "1d",
    algorithm: "HS256",
  }
);
