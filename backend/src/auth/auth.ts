import express from 'express';
const app = express();
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';


// also middleware
export const checkScopes = requiredScopes('read:messages');


// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
// const checkJwt = auth({
//   audience: '{yourApiIdentifier}',
//   issuerBaseURL: `https://{yourDomain}/`,
// });



export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
  tokenSigningAlg: process.env.TOKEN_SIGN_ALGORITHM,
});



// example below:
/**
app.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});
 */



/*
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://your-auth0-domain/.well-known/jwks.json`,
  }),
  audience: 'your-api-audience',
  issuer: `https://your-auth0-domain/`,
  algorithms: ['RS256'],
});



*/