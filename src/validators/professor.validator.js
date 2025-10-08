import { check } from "express-validator";
import Professor from "../models/professor.model.js";
import validateResult from "../helpers/validateResult.js";
import { emailProfessorValidator } from "./common.validator.js";

const professorCreateValidator = [
    check('professor.professorId')
        .exists().withMessage('Professor ID is required')
        .isInt().withMessage('Professor ID must be an integer')
        .custom(async (value) => {
            const professor = await Professor.findOne({ where: { professorId: value } });
            if (professor) {
                throw new Error('Professor ID already in use');
            }
        }),
    emailProfessorValidator,
    check('professor.age')
        .exists().withMessage('Age is required')
        .isInt({ min: 0 }).withMessage('Age must be a positive integer'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const professorUpdateValidator = [
    emailProfessorValidator,
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export { professorCreateValidator, professorUpdateValidator };