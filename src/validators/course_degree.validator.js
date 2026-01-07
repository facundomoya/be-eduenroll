import { check } from "express-validator";
import CourseDegree from "../models/course_degree.model.js";
import Degree from "../models/degree.model.js";
import validateResult from "../helpers/validateResult.js";

const courseDegreeCreateValidator = [
check('id_course')
        .exists().withMessage('Course ID is required')
        .isInt().withMessage('Course ID must be an integer'),
    check('id_degree')
        .exists().withMessage('Degree ID is required')
        .isInt().withMessage('Degree ID must be an integer')
        .custom(async (value) => {
            const degree = await Degree.findOne({ where: { id: value } });
            if (!degree) {
                throw new Error('Degree does not exist');
            }
        }),
    check('id_course')
        .custom(async (value, { req }) => {
            const existing = await CourseDegree.findOne({
                where: {
                    id_course: value,
                    id_degree: req.body.id_degree
                }
            });
            if (existing) {
                throw new Error('This course is already linked to this degree');
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export const courseDegreeValidator = {
    courseDegreeCreateValidator
};