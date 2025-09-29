import express from "express";
import { userController } from "../../controllers/user.controller.js";
import  VerifyToken  from "../../middleware/verifyToken.js";
import { adminValidator } from "../../validator/validator_functions/admin_user.validator.js";
import { professorValidator } from "../../validator/validator_functions/professor_user.validator.js";

const route = express.Router();

route.get("/user", VerifyToken, userController.getAllUsers);
route.get("/user/:id", VerifyToken, userController.getUser);
route.post("/user/administrator", VerifyToken, adminValidator.admin_save, userController.addAdminUser);
route.post("/user/professor", VerifyToken, professorValidator.professor_save, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteUser);
route.put("/user/:id", VerifyToken, userController.updateUser);

export default route;
