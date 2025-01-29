import { Router } from "express";
import { publicEndpoints } from "./public/_publicEndpoints";
import { secureEndpoints } from "./secure/_secureEndpoints";
import { authEndpoints } from "./auth";



export const routing = Router()

routing.use('/api/',
  publicEndpoints,
  secureEndpoints,
  authEndpoints,
);
