import { check } from "express-validator";
import Student from "../models/student.model.js";
import validateResult from "../helpers/validateResult.js";

const studentCreateValidator = [
    check('studentId')
        .isLength({ min: 3, max: 10 }).withMessage('Student ID must be between 3 and 10 characters')
        .exists().withMessage('Student ID is required')
        .custom(async (value) => {
            const student = await Student.findOne({ where: { studentId: value } });
            if (student) {
                throw new Error('Student ID already exists');
            }
        }),
        (req, res, next) => {
        validateResult(req, res, next);
    },
    check('email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (value) => {
            const student = await Student.findOne({ where: { email: value } });
            if (student) {
                throw new Error('Email already in use');
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const studentUpdateValidator = [
    check('studentId')
        .optional()
        .isLength({ min: 3, max: 10 }).withMessage('Student ID must be between 3 and 10 characters')
        .custom(async (value) => {
            const student = await Student.findOne({ where: { studentId: value } });
            if (student) {
                throw new Error('Student ID already exists');
            }
        }),
        (req, res, next) => {
        validateResult(req, res, next);
    }
];

export const studentValidator = {
    studentCreateValidator,
    studentUpdateValidator
};