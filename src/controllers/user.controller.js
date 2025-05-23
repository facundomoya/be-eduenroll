import { mixParams } from "../utils/formatData.utils.js";
import { userServices } from "../services/user.services.js";

const getAllUsers = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await userServices.getAllUsers(params);
  
  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const getUser = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await userServices.getUser(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const addProfessorUser = async (req, res) => {
  const request = mixParams(req);
  const { data, error } = await userServices.addProfessorUser(request);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const addAdminUser = async (req, res) => {
const request = mixParams(req);
const { data, error } = await userServices.addAdminUser(request);
if(error){
  return res.status(500).json({ error, code: 500 });
}

return res.status(200).json({ data, code: 200 });
};

const deleteProfessorUser = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await userServices.deleteProfessorUser(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const updateUser = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await userServices.updateUser(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const getPdf = async (req, res) => {

  const { filename } = req.params;

  const { data, error } = await userServices.getPdf(filename);

  if (error) {
    return res.status(404).json({ error, code: 404 });
  }

  return res.status(200).json({ data, code: 200 });
};

const downloadPdf = async (req, res) => {
  const { filename } = req.params;

  const { fileContent, error } = await userServices.getPdfForDownload(filename);

  if (error) {
    return res.status(404).json({ error, code: 404 });
  }

  res.setHeader('Content-Type', 'application/pdf');
  //attachment fuerza la descarga
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  return res.status(200).send(fileContent);
};

export const userController = {
  getAllUsers,
  addProfessorUser,
  addAdminUser,
  getUser,
  deleteProfessorUser,
  updateUser,
  getPdf,
  downloadPdf
};
