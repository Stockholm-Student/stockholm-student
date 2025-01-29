import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';



dotenv.config();

// check role/permission
// export const checkScopes = requiredScopes('read:messages');

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE, // yourApiIdentifier. this would be the Identifier found on the API settings in the Auth0 dashboard
  issuerBaseURL: process.env.AUTH0_TENANT_DOMAIN, // tenant domain
  tokenSigningAlg: process.env.TOKEN_SIGN_ALGORITHM
});
