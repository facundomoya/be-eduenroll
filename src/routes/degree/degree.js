import express from "express";
import  VerifyToken  from "../../middleware/verifyToken.js";
import { degreeController } from "../../controllers/degree.controller.js";
import { degreeValidator } from "../../validators/degree.validator.js";

const route = express.Router();

route.get("/degrees", degreeController.getAllDegrees);
route.get("/degree/:id", degreeController.getDegree);
route.post("/degree", VerifyToken, degreeValidator.degreeCreateValidator, degreeController.addDegree);
route.put("/degree/:id", VerifyToken, degreeValidator.degreeUpdateValidator, degreeController.updateDegree);
//routes to link professor with degree
route.get("/professors/degree", degreeController.getAllProfessorDegrees);
route.get("/professor/degree/:id", degreeController.getProfessorDegree);
route.post("/professor/degree", VerifyToken, degreeValidator.professorDegreeValidator, degreeController.addProfessorDegree);
route.put("/professor/degree/:id", VerifyToken, degreeValidator.professorDegreeUpdateValidator, degreeController.updateProfessorDegree);

export default route;
