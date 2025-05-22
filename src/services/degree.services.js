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


export const degreeServices = {
 getAllDegrees
};