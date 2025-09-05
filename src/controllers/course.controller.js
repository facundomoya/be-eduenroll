import { mixParams } from "../utils/formatData.utils.js";
import { courseService } from "../services/course.service.js";

const getAllCourses = async (req, res) => {
    const request = mixParams(req);
    const { data, error } = await courseService.getAllCourses(request);

    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(201).json({ data: data, code: 201 });
};

const getCourse = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await courseService.getCourse(id);

    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(200).json({ data: data, code: 200 });
};

const addCourse = async (req, res) => {
    const request = mixParams(req);
    const { data, error } = await courseService.addCourse(request);

    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(201).json({ data: data, code: 201 });
};

const updateCourse = async (req, res) => {
    const params = mixParams(req);
    const { data, error } = await courseService.updateCourse(params);

    if (error) {
        return res.status(400).json({ error });
    }
    return res.status(200).json({ data });
};

export const courseController = {
    getAllCourses,
    getCourse,
    addCourse,
    updateCourse
};
