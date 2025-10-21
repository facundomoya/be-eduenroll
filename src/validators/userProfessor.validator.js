import { check } from "express-validator";
import { commonValidator } from "./common.validator.js";
import Professor from "../models/professor.model.js";
import validateResult from "../helpers/validateResult.js";

const userProfessorCreateValidator = [
    commonValidator.userNameValidator,
    commonValidator.passwordValidator,
    check('professor.email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (value) => {
            const professor = await Professor.findOne({ where: { email: value } });
            if (professor) {
                throw new Error('Email already in use');
            }
        }),
    check('professor.professorId')
        .exists().withMessage('ProfessorId is required')
        .isLength({ min: 3, max: 10 }).withMessage('Professor ID must be between 3 and 10 characters')
        .custom(async (value) => {
            const professor = await Professor.findOne({where: {professorId: value}});
            if (professor) {
                throw new Error('ProfessorId is already in use');
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export const userProfessorValidator = { userProfessorCreateValidator };