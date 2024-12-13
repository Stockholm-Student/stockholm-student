import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();


// also middleware. check specific permissions and roles
export const checkScopes = requiredScopes('read:messages');



export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE, // yourApiIdentifier. this would be the Identifier found on the API settings in the Auth0 dashboard
  issuerBaseURL: process.env.AUTH0_DOMAIN, // tenant domain
  tokenSigningAlg: process.env.TOKEN_SIGN_ALGORITHM
});
