import { check } from "express-validator"
import Course from "../models/course.model.js"
import validateResult from "../helpers/validateResult.js"

const courseCreateValidator = [
    check('name')
    .exists().withMessage('Name is required')
    .custom(async (value) => {
        const course = await Course.findOne({ where: { name: value } });
        if (course) {
            throw new Error('Course already exists');
        }
    }),
    check('courseId')
    .exists().withMessage('Course ID is required')
    .custom(async (value) => {
        const course = await Course.findOne({ where: { courseId: value } });
        if (course) {
            throw new Error('Course ID already exists');
        }
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const courseUpdateValidator = [
    check('name')
    .optional()
    .custom(async (value) => {
        const course = await Course.findOne({ where: { name: value } });
        if (course) {
            throw new Error('Course already exists');
        }
    }),
    check('courseId')
    .optional()
    .custom(async (value) => {
        const course = await Course.findOne({ where: { courseId: value } });
        if (course) {
            throw new Error('Course ID already exists');
        }
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export const courseValidator = {
    courseCreateValidator,
    courseUpdateValidator
}