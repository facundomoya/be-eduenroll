import express from "express";
import { userController } from "../../controllers/user.controller.js";
import VerifyToken from "../../middleware/verifyToken.js";
import { userAdministratorCreateValidator } from "../../validators/userAdministrator.validator.js";
import { userProfessorCreateValidator } from "../../validators/userProfessor.validator.js"
import { userUpdateValidator } from "../../validators/common.validator.js";

const route = express.Router();

route.get("/users", userController.getAllUsers);
route.get("/user/:id", userController.getUser);
route.post("/user/administrator", VerifyToken, userAdministratorCreateValidator, userController.addAdminUser);
route.post("/user/professor", VerifyToken,userProfessorCreateValidator, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteUser);
route.put("/user/:id", VerifyToken, userUpdateValidator, userController.updateUserPassword);

export default route;
