import { RequestHandler } from "express"

export const validateUserMiddleware: RequestHandler = (req, res, next) => {

  console.log("\nValidation: not implemented\n")
  next()

  // if (!req.params.userId)
  //   return 

  // if (!req.body.email) 
  //   return res.status(401).json({error: "No email/username provided"})

  // if (!req.body.password) 
  //   return res.status(401).json({error: "No password provided"})

  // return validateUser(req.body.email, req.body.password)
  //   ? next()
  //   : res.status(401).json({error: "Validation failed"})
}

export const validateUser = (email: string, password: string) => {
  return true
}