import express from "express";
import { userController } from "../../controllers/user.controller.js";
import VerifyToken from "../../middleware/verifyToken.js";
import { userProfessorValidator } from "../../validators/userProfessor.validator.js";
import { userAdministratorValidator } from "../../validators/userAdministrator.validator.js";
import { commonValidator } from "../../validators/common.validator.js";

const route = express.Router();

route.get("/users", userController.getAllUsers);
route.get("/user/:id", userController.getUser);
route.post("/user/administrator", VerifyToken, userAdministratorValidator.userAdministratorCreateValidator, userController.addAdminUser);
route.post("/user/professor", VerifyToken, userProfessorValidator.userProfessorCreateValidator, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteUser);
route.put("/user/:id", VerifyToken, commonValidator.userUpdateValidator, userController.updateUserPassword);

export default route;
