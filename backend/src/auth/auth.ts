import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE, // YourApiIdentifier
  issuerBaseURL: process.env.AUTH0_TENANT_DOMAIN, // Tenant domain
  tokenSigningAlg: process.env.TOKEN_SIGN_ALGORITHM
});
