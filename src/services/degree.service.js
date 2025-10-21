import Degree from "../models/degree.model.js";

const getAllDegrees = async (params) => {
try {
    const degrees = await Degree.findAll();
    return { data: degrees };
  } catch (error) {
    return { error: error.message };
  }
};

const getDegree = async(params) => {
  try {
    const degree = await Degree.findByPk(params.id);
    if (!degree) {
      return { error: "Degree not found" };
    }
    return { data: degree };
  } catch (error) {
    return { error: error.message };
  }
};

const addDegree = async (params) => {
  try {
    const degree = await Degree.create(params);
    return { data: degree };
  } catch (error) {
    return { error: error.message };
  }
};

const updateDegree = async (params) => {
  try{
    const degree = await Degree.findByPk(params.id);
    if (!degree) {
      return { error: "Degree not found" };
    }
    await degree.update(params);
    return { data: degree };
  }catch(error){
    return { error: error.message };
  }
};

export const degreeService = {
 getAllDegrees,
 getDegree,
 addDegree,
 updateDegree
};
