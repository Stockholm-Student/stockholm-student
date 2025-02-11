import { Strategy } from "passport-google-oauth20";
import dotenv from 'dotenv';
import { UserModel } from "../../models/user";

dotenv.config();


export const googleStrategy = new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log("GoogleStrategy: ")
    console.log("id:", profile.id)
    console.log("token:", "\n access:", accessToken, "\n refresh:", refreshToken)

    try {

      let user = await UserModel.findOne({ googleId: profile.id });

      if (!profile.emails || profile.emails.length === 0)
        return done(new Error("Google profile has no email"));

      // Create new user
      if (!user) {
        console.log("No user found!")

        user = await UserModel.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName
        });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
)
