import { check } from "express-validator";
import { Op } from "sequelize";
import ProfessorCourse from "../models/professor_course.model.js";
import Course from "../models/course.model.js";
import Professor from "../models/professor.model.js";
import validateResult from "../helpers/validateResult.js";

const professorCourseCreateValidator = [
 check('id_professor')
    .exists().withMessage('Professor ID is required')
    .bail()
    .isInt().withMessage('Professor ID must be an integer')
    .bail()
    .custom(async (value) => {
        const professor = await Professor.findByPk(value);
        if (!professor) {
            throw new Error('Professor does not exist');
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

    check('id_professor')
        .custom(async (value, { req }) => {
            const existing = await ProfessorCourse.findOne({
                where: {
                    id_professor: value,
                    id_course: req.body.id_course
                }
            });

            if (existing) {
                throw new Error('This course is already linked to this professor');
            }
        }),

    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const professorCourseUpdateValidator = [
  check('id_professor')
    .exists().withMessage('Professor ID is required')
    .bail()
    .isInt().withMessage('Professor ID must be an integer')
    .bail()
    .custom(async (value) => {
        const professor = await Professor.findByPk(value);
        if (!professor) {
            throw new Error('Professor does not exist');
        }
    }),

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
    })
    .custom(async (value, { req }) => {
        const existing = await ProfessorCourse.findOne({
            where: {
                id_course: value,
                id_professor: req.body.id_professor,
                id: { [Op.ne]: req.params.id }
            }
        });

        if (existing) {
            throw new Error('This course is already linked to this professor');
        }
    }),

  (req, res, next) => validateResult(req, res, next)
];


export const professorCourseValidator = {
    professorCourseCreateValidator,
    professorCourseUpdateValidator
};
