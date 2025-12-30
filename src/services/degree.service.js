import Degree from "../models/degree.model.js";

const getAllDegrees = async () => {
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

const addDegree = async (body) => {
  try {
    const degree = await Degree.create(body);
    return { data: degree };
  } catch (error) {
    return { error: error.message };
  }
};

const updateDegree = async (request) => {
  try{
    const degree = await Degree.findByPk(request.id);
    if (!degree) {
      return { error: "Degree not found" };
    }
    await degree.update(request);
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
