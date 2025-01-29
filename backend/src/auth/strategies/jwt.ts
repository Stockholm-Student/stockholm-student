import { ExtractJwt, Strategy } from "passport-jwt";
import dotenv from 'dotenv';
import { UserModel } from "../../models/done/user";

dotenv.config();


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.PASSPORT_JWT_SECRET || "",
  // issuer = 'accounts.examplesoft.com';
  // audience = 'yoursite.net';
};

export const jwtStrategy = new Strategy(jwtOptions, async (payload, done) => {
  if (!payload || !payload.userId)
    return done(new Error("No userId in token"));

  UserModel.findOne({userId: payload.userId})
    .then(foundDoc => {
      foundDoc 
        ? done(foundDoc)
        : done(null, new Error(`No user found for userId ${payload.userId}`))
    })
    .catch(err => done(null, err))
})
