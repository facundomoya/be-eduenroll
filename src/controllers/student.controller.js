import { sequelize } from "../database/connect.js";
import { mixParams } from "../utils/formatData.utils.js";
import { studentService } from "../services/student.service.js";

const addStudents = async (req, res) => {
    const request = mixParams(req);
    const {data, error} = await studentService.addStudents(request);
   
    if(error){
        return res.status(400).json({ error });
    }
    return res.status(201).json({ data });
}

export const studentController = {
  addStudents
};
