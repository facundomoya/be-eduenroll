import express from "express";
import { VerifyToken } from "../../middleware/verifyToken.js";
import { degreeController } from "../../controllers/degree.controller.js";
import { degreeValidator } from "../../validator/functions/degree.validator.js";

const route = express.Router();

route.get("/degree", VerifyToken, degreeController.getAllDegrees);
route.get("/degree/:id", VerifyToken, degreeController.getDegree);
route.post("/degree", VerifyToken, degreeValidator.degree_save, degreeController.addDegree);

export default route;
