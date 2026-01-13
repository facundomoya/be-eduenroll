import { check } from "express-validator";
import { Op } from "sequelize";
import Course from "../models/course.model.js";
import StudentCourse from "../models/student_course.model.js";
import Student from "../models/student.model.js";
import validateResult from "../helpers/validateResult.js";

const studentCourseCreateValidator = [
    check('id_student')
        .exists().withMessage('Student ID is required')
        .bail()
        .isInt().withMessage('Student ID must be an integer')
        .bail()
        .custom(async (value) => {
            const student = await Student.findByPk(value);
            if (!student) {
                throw new Error('Student does not exist');
            }
        })
        .bail(),

    check('id_course')
        .exists().withMessage('Course ID is required')
        .isInt().withMessage('Course ID must be an integer')
        .custom(async (value) => {
            const course = await Course.findByPk(value);
            if (!course) {
                throw new Error('Course does not exist');
            }
        }),

    check('id_student')
        .custom(async (value, { req }) => {
            const existing = await StudentCourse.findOne({
                where: {
                    id_student: value,
                    id_course: req.body.id_course
                }
            });

            if (existing) {
                throw new Error('This student is already linked to this course');
            }
        }),

    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const studentCourseUpdateValidator = [
  check('id_course')
    .exists().withMessage('Course ID is required')
    .bail()
    .isInt().withMessage('Course ID must be an integer')
    .bail()
    .custom(async (value) => {
        const course = await Course.findByPk(value);
        if (!course) {
            throw new Error('Course does not exist');
        }
    }),

  check('id_student')
    .exists().withMessage('Student ID is required')
    .bail()
    .isInt().withMessage('Student ID must be an integer')
    .bail()
    .custom(async (value) => {
        const student = await Student.findByPk(value);
        if (!student) {
            throw new Error('Student does not exist');
        }
    })
    .custom(async (value, { req }) => {
        const existing = await StudentCourse.findOne({
            where: {
                id_student: value,
                id_course: req.body.id_course,
                id: { [Op.ne]: req.params.id }
            }
        });

        if (existing) {
            throw new Error('This student is already linked to this course');
        }
    }),

  (req, res, next) => validateResult(req, res, next)
];


export const studentCourseValidator = {
    studentCourseCreateValidator,
    studentCourseUpdateValidator
};
