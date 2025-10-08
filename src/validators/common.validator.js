import { check } from "express-validator";
import Administrator from "../models/administrator.model.js";
import Professor from "../models/professor.model.js";

const passwordValidator = check('user.password')
    .exists().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long');

const emailAdminValidator =  check('admin.email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (value) => {
            const admin = await Administrator.findOne({ where: { email: value } });
            if (admin) {
                throw new Error('Email already in use');
            }
        });

const emailProfessorValidator =  check('professor.email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (value) => {
            const professor = await Professor.findOne({ where: { email: value } });
            if (professor) {
                throw new Error('Email already in use');
            }
        });

export { passwordValidator, emailAdminValidator, emailProfessorValidator };