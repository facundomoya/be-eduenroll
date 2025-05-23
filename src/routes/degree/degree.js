import express from "express";
import { VerifyToken } from "../../middleware/verifyToken.js";
import { degreeController } from "../../controllers/degree.controller.js";

const route = express.Router();

route.get("/degree", VerifyToken, degreeController.getAllDegrees);
route.get("/degree/:id", VerifyToken, degreeController.getDegree);

export default route;
