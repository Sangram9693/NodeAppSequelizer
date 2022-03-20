/* eslint-disable camelcase */
const connection = require('../models');
const constants = require('../constants');

const { Student } = connection;

const getStudentById = async (id) => {
  try {
    const result = await Student.findByPk(id);
    if (result) {
      return result;
    }
    return '';
  } catch (err) {
    throw new Error(err);
  }
};

const saveStudent = async (data) => {
  const response = {
    message: constants.FAILED,
  };

  try {
    const result = await Student.create(data);
    if (result) {
      response.message = constants.SAVE;
      response.data = result;
    }
  } catch (err) {
    response.error = err;
  }

  return response;
};

const updateStudent = async (req) => {
  const response = {
    message: constants.FAILED,
  };
  try {
    const {
      params,
      body,
    } = req;

    const result = await Student.update(body, {
      where: { id: params.id },
    });
    if (result && result[0] !== 0) {
      response.message = constants.UPDATE;
      response.data = await getStudentById(params.id);
    } else {
      response.message = constants.NOT_FOUND;
    }
  } catch (err) {
    response.error = err;
  }

  return response;
};

const getStudent = async (data) => {
  const response = {
    message: constants.FAILED,
  };

  try {
    if (data?.id) {
      const student = await getStudentById(data.id);
      response.message = constants.SUCCESS;
      response.data = student;

      return response;
    }
    const res = await Student.findAll();
    if (res) {
      response.message = constants.SUCCESS;
      response.data = res;

      return response;
    }
    response.error = res;
  } catch (err) {
    response.error = err;
    return response;
  }

  return response;
};

const deleteStudent = async (data) => {
  const response = {
    message: constants.FAILED,
  };

  try {
    const result = await Student.destroy({
      where: { id: data.id },
    });

    if (result && result[0] !== 0) {
      response.message = constants.DELETE;
    } else {
      response.message = constants.NOT_FOUND;
    }
  } catch (err) {
    response.error = err;
  }

  return response;
};

module.exports = {
  saveStudent,
  updateStudent,
  getStudent,
  deleteStudent,
};
