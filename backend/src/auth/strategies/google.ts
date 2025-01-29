import { Strategy } from "passport-google-oauth20";


export const googleStrategy = new Strategy({
    clientID: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // Perform any additional verification or user lookup here
    // and return the user object
    return done(null, profile);
  }
)
