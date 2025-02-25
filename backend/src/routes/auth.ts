import express, { Response } from 'express';
import { googleCallback, loginUser, testCommunityRole, testIsEventCreator, testUserRole, Validator } from '../controllers/auth';
import { passportValidation } from '../auth/authPassport';
import passport from 'passport';
import { postUser } from '../controllers/user';

export const authEndpoints = express.Router();


authEndpoints
  .post('/auth/local/login', loginUser)
  .post('/auth/local/signup', postUser)

// dev endpoints
authEndpoints
  .get(
    '/auth/testIsAdmin', 
    new Validator().validate({ hasGlobalRole: "admin" }), 
    testUserRole
  )
   .get('/auth/testIsEventCreator', new Validator().validate({ isEventCreator: true }), testIsEventCreator)
   .get('/auth/testCommunityRole', new Validator().validate({ hasCommunityRole: "moderator" }), testCommunityRole)
  