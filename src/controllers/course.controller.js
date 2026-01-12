import { courseService } from "../services/course.service.js";

const getAllCourses = async (req, res) => {
    const { data, error } = await courseService.getAllCourses();
    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(200).json(data);
};

const getCourse = async (req, res) => {
    const params = req.params;
    const { data, error } = await courseService.getCourse(params);
    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(200).json(data);
};

const addCourse = async (req, res) => {
    const body = req.body;
    const { data, error } = await courseService.addCourse(body);
    if (error) {
        return res.status(400).json({ error });
    };
    return res.status(201).json(data);
}

const updateCourse = async (req, res) => {
    const request = { ...req.params, ...req.body };
    const { data, error } = await courseService.updateCourse(request);
    if (error) {
        return res.status(400).json({ error });
    };
    return res.status(200).json(data);
}
//professor_course controllers
const addProfessorCourse = async (req, res) => {
    const body = req.body;
    const { data, error } = await courseService.addProfessorCourse(body);
    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(201).json(data);
};

const getAllProfessorCourses = async (req, res) => {
    const { data, error } = await courseService.getAllProfessorCourses();
    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(200).json(data);
};

const getProfessorCourse = async (req, res) => {
    const params = req.params;
    const { data, error } = await courseService.getProfessorCourse(params);
    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(200).json(data);
};

const updateProfessorCourse = async (req, res) => {
    const request = { ...req.params, ...req.body };
    const { data, error } = await courseService.updateProfessorCourse(request);
    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(200).json(data);
};

export const courseController = {
    getAllCourses,
    getCourse,
    addCourse,
    updateCourse,
    addProfessorCourse,
    getAllProfessorCourses,
    getProfessorCourse,
    updateProfessorCourse
};
