import { Request, Response, Router } from "express";
import { publicEndpoints } from "./public/_publicEndpoints";
import { secureEndpoints } from "./secure/_secureEndpoints";



export const routing = Router()

routing.use('/api/',
  publicEndpoints,
  secureEndpoints,
);
