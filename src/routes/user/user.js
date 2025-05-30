import express from "express";
import {userController} from "../../controllers/user.controller.js";
import { VerifyToken } from "../../middleware/verifyToken.js";
import upload from '../../utils/multer.utils.js';
import { userValidator } from "../../validator/functions/admin_user.validator.js";
import { userValidator as professorValidator } from "../../validator/functions/professor_user.validator.js";

const route = express.Router();

route.get("/user", VerifyToken, userController.getAllUsers);
route.get("/user/:id", VerifyToken, userController.getUser);
route.post("/user/administrator", VerifyToken, userValidator.admin_save, userController.addAdminUser);
route.post("/user/professor", VerifyToken, professorValidator.professor_save, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteUser);
route.put("/user/:id", VerifyToken, userController.updateUser);


route.post("/user/pdf", VerifyToken, upload, (req, res) => { //agrega el pdf a la BD y a la carpeta uploads
  res.json({
    message: 'Archivo subido correctamente',
    file: req.file
  });
});

export default route;
