import { mixParams } from "../utils/formatData.utils.js";
import { degreeServices } from "../services/degree.services.js";

const getAllDegrees = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await degreeServices.getAllDegrees(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
}


export const degreeController = {
  getAllDegrees
};