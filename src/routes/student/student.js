import express from "express";
import { VerifyToken } from "../../middleware/verifyToken.js";
import { studentController } from "../../controllers/student.controller.js";
//import { degreeValidator } from "../../validator/validator_functions/degree.validator.js";

const route = express.Router();

route.post("/student", studentController.addStudents);

export default route;
