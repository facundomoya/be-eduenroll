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

export const courseController = {
    getAllCourses,
    getCourse,
    addCourse,
    updateCourse
};
