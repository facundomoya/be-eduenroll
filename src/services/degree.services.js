import {sequelize} from "../database/connect.js";
import Degree from "../models/degree.model.js";

const getAllDegrees = async (params) => {
  const { name, id } = params;
  const data_search = {};

  name && (data_search.name = name);
  id && (data_search.id = id);

  try {
    const data = await Degree.findAll({
      where: data_search,
    });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const getDegree = async(params) => {
  const { id } = params;
  const data_search = {};

  id && (data_search.id = id);

  try {
    const data = await Degree.findOne({
      where: data_search, //paso el objeto completo seria como un "SELECT * FROM degree WHERE id = 3"
    });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const updateDegree = async (params) => {
  const { id, degree } = params;
  const data_search = {};

  id && (data_search.id = id);

  try {
    const [updated] = await Degree.update(degree, {
      where: data_search,
    });

    if (updated) {
      const updatedDegree = await Degree.findOne({ where: data_search });
      return { data: updatedDegree };
    }
    throw new Error("Degree not found");
  } catch (error) {
    return { error: error.message };
  }
};

const addDegree = async (params) => {
  try {
    const data = await Degree.create(params.degree);
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

export const degreeServices = {
 getAllDegrees,
 getDegree,
 addDegree,
 updateDegree
};
