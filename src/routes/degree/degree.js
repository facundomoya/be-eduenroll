import express from "express";
import  VerifyToken  from "../../middleware/verifyToken.js";
import { degreeController } from "../../controllers/degree.controller.js";

import {degreeValidator} from "../../validators/degree.validator.js";

const route = express.Router();

route.get("/degrees", degreeController.getAllDegrees);
route.get("/degree/:id", degreeController.getDegree);
route.post("/degree", VerifyToken, degreeValidator.degreeCreateValidator, degreeController.addDegree);
route.put("/degree/:id", VerifyToken, degreeValidator.degreeUpdateValidator, degreeController.updateDegree);

export default route;
