import express from "express";
import {userController} from "../../controllers/user.controller.js";
import { VerifyToken } from "../../middleware/verifyToken.js";
import upload from '../../utils/multer.utils.js';
import { userValidator } from "../../validator/functions/admin_user.validator.js";
import { userValidator as professorValidator } from "../../validator/functions/professor_user.validator.js";
import { VerificarRoles } from "../../middleware/verifyRol.js";
import { roles_routes } from "../../config/config.js";

const route = express.Router();

route.get("/user", VerifyToken, userController.getAllUsers);
route.get("/user/:id", VerifyToken, VerificarRoles([roles_routes.USUARIOS.GET_ALL_USUARIOS]), userController.getUser);
route.post("/user/administrator", VerifyToken, userValidator.admin_save, userController.addAdminUser);
route.post("/user/professor", VerifyToken, professorValidator.professor_save, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteProfessorUser);
route.put("/user/:id", VerifyToken, userController.updateUser);
route.get("/user/pdf/download/:filename", VerifyToken, userController.downloadPdf);

route.post("/user/pdf", VerifyToken, upload, (req, res) => {
    // Esta parte solo se ejecuta si no hubo errores
    res.json({ 
      message: 'Archivo subido correctamente',
      file: req.file 
    });
  });

export default route;
