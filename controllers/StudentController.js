const studentDAO = require('../dao/StudentDAO');
const constants = require('../constants');

const createStudent = async (req, resp) => {
  let status = 500;
  let result = constants.INTERNAL_SERVER_ERROR;
  try {
    const dbResponse = await studentDAO.saveStudent(req.body);
    if (dbResponse.message !== constants.FAILED) {
      status = 200;
      result = dbResponse.data ? dbResponse.data : dbResponse.message;
    }
  } catch (error) {
    result = error;
  }

  resp.status(status);
  resp.send(result);
  return resp;
};

const updateStudent = async (req, resp) => {
  let status = 500;
  let result = constants.INTERNAL_SERVER_ERROR;
  try {
    const dbResponse = await studentDAO.updateStudent(req);
    if (dbResponse.message !== constants.FAILED) {
      status = 200;
      result = dbResponse.data ? dbResponse.data : dbResponse.message;
    }
  } catch (error) {
    result = error;
  }

  resp.status(status);
  resp.send(result);
  return resp;
};

const getAllStudent = async (req, resp) => {
  let status = 500;
  let result = constants.INTERNAL_SERVER_ERROR;
  try {
    const dbResponse = await studentDAO.getStudent('');
    if (dbResponse.message !== constants.FAILED) {
      status = 200;
      result = dbResponse.data ? dbResponse.data : dbResponse.message;
    }
  } catch (error) {
    result = error;
  }

  resp.status(status);
  resp.send(result);
  return resp;
};

const getByStudentId = async (req, resp) => {
  let status = 500;
  let result = constants.INTERNAL_SERVER_ERROR;
  try {
    const arg = req.params;

    const dbResponse = await studentDAO.getStudent(arg);
    if (dbResponse.message !== constants.FAILED) {
      status = 200;
      result = dbResponse.data ? dbResponse.data : dbResponse.message;
    }
  } catch (error) {
    result = error;
  }

  resp.status(status);
  resp.send(result);
  return resp;
};

const deleteStudent = async (req, resp) => {
  let status = 500;
  let result = constants.INTERNAL_SERVER_ERROR;
  try {
    const arg = req.params;
    const dbResponse = await studentDAO.deleteStudent(arg);
    if (dbResponse.message !== constants.FAILED) {
      status = 200;
      result = dbResponse.data ? dbResponse.data : dbResponse.message;
    }
  } catch (error) {
    result = error;
  }

  resp.status(status);
  resp.send(result);
  return resp;
};

module.exports = {
  createStudent,
  updateStudent,
  getAllStudent,
  getByStudentId,
  deleteStudent,
};
