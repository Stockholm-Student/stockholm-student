import passport from "passport";
import dotenv from 'dotenv';
import { jwtStrategy } from "./strategies/jwt";
import { googleStrategy } from "./strategies/google";

dotenv.config();

passport.use(jwtStrategy);
passport.use(googleStrategy);

export const passportValidation = passport.authenticate(
  [
    'jwt',
  ], 
  { 
    session: false 
  }
)

