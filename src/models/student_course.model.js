import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";
import Student from "./student.model.js";
import Course from "./course.model.js";

const StudentCourse = sequelize.define("student_course", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  }
},{
  timestamps: true,
  tableName: "student_course",
  paranoid: true
});

Student.belongsToMany(Course, { 
  through: StudentCourse,
  foreignKey: 'id_student'
});

Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: 'id_course'
});

export default StudentCourse;
