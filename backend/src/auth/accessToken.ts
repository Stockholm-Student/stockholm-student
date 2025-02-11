import jwt from "jsonwebtoken";

export const generateAccessToken = (idObj: {[key: string]: string}) => jwt.sign(
  idObj,
  process.env.PASSPORT_JWT_SECRET || "",
  { 
    expiresIn: "1d",
    algorithm: "HS256",
  }
);


export const getUserIdFromToken = (authHeader: string  | undefined) => {
  if(!authHeader)
    throw new Error("No authorization header")

  const tokenArray = authHeader.split(/s+/);

  if(tokenArray.length !== 2)
    throw new Error("Invalid token")
  
  if(tokenArray[0].toLowerCase() !== "bearer")
    throw new Error("Invalid token")

  const decoded  = jwt.decode(tokenArray[1]) as { 
    userId: string
  }

  if(!decoded || !decoded.userId )
    throw new Error("No user id in token")

  return decoded.userId
}