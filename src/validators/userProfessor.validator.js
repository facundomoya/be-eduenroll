import { check } from "express-validator";
import { passwordValidator, userNameValidator } from "./common.validator.js";
import Professor from "../models/professor.model.js";
import validateResult from "../helpers/validateResult.js";

const userProfessorCreateValidator = [
    userNameValidator,
    passwordValidator,
    check('professor.email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (value) => {
            const admin = await Professor.findOne({ where: { email: value } });
            if (admin) {
                throw new Error('Email already in use');
            }
        }),
    check('professor.administratorId')
        .exists().withMessage('ProfessorId is required')
        .custom(async (value) => {
            console.log(value)
            const admin = await Professor.findOne({where: {administratorId: value}});
            if (admin) {
                throw new Error('ProfessorId is already in use');
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export { userProfessorCreateValidator };