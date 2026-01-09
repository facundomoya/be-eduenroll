import express from "express";
import  VerifyToken  from "../../middleware/verifyToken.js";
import { degreeController } from "../../controllers/degree.controller.js";
import { degreeValidator } from "../../validators/degree.validator.js";
import { professorDegreeValidator } from "../../validators/professor_degree.validator.js";
import { courseDegreeValidator } from "../../validators/course_degree.validator.js";

const route = express.Router();

route.get("/degrees", degreeController.getAllDegrees);
route.get("/degree/:id", degreeController.getDegree);
route.post("/degree", VerifyToken, degreeValidator.degreeCreateValidator, degreeController.addDegree);
route.put("/degree/:id", VerifyToken, degreeValidator.degreeUpdateValidator, degreeController.updateDegree);
//routes to link professor with degree
route.get("/professors/degree", degreeController.getAllProfessorDegrees);
route.get("/professor/degree/:id", degreeController.getProfessorDegree);
route.post("/professor/degree", VerifyToken, professorDegreeValidator.professorDegreeCreateValidator, degreeController.addProfessorDegree);
route.put("/professor/degree/:id", VerifyToken, professorDegreeValidator.professorDegreeUpdateValidator, degreeController.updateProfessorDegree);
//routes to link course with degree
route.get("/courses/degree", degreeController.getAllCoursesDegrees);
route.get("/course/degree/:id", degreeController.getCourseDegree);
route.post("/course/degree", VerifyToken, courseDegreeValidator.courseDegreeCreateValidator, degreeController.addCourseDegree);
route.put("/course/degree/:id", VerifyToken, courseDegreeValidator.courseDegreeUpdateValidator, degreeController.updateCourseDegree);

export default route;
