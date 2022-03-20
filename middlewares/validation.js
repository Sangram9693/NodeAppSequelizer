const Joi = require('joi');
const constants = require('../constants');

const METHOD_TYPE = ['GET', 'DELETE', 'POST', 'PUT'];

const validation = async (req, resp, next) => {
  try {
    const obj = {
      create: {
        body: {
          name: Joi.string().min(3).max(20).required()
            .messages({
              'string.base': `"name" ${constants.VALIDATION_MSG.BASE_STRING}`,
              'string.empty': `"name" ${constants.VALIDATION_MSG.EMPTY_STRING}`,
              'string.min': `"name" ${constants.VALIDATION_MSG.MIN_STRING}`,
              'string.max': `"name" ${constants.VALIDATION_MSG.MAX_STRING}`,
              'any.required': `"name" ${constants.VALIDATION_MSG.REQUIRED}`,
            }),
          class_no: Joi.string().min(1).max(10).required()
            .messages({
              'string.empty': `"class_no" ${constants.VALIDATION_MSG.EMPTY_STRING}`,
              'string.min': `"class_no" ${constants.VALIDATION_MSG.MIN_STRING}`,
              'string.max': `"class_no" ${constants.VALIDATION_MSG.MAX_STRING}`,
              'any.required': `"class_no" ${constants.VALIDATION_MSG.REQUIRED}`,
            }),
          roll_no: Joi.number().min(1).max(100).required()
            .messages({
              'number.base': `"roll_no" ${constants.VALIDATION_MSG.BASE_NUMBER}`,
              'number.empty': `"roll_no" ${constants.VALIDATION_MSG.EMPTY_STRING}`,
              'number.min': `"roll_no" ${constants.VALIDATION_MSG.MIN_NUMBER}`,
              'number.max': `"roll_no" ${constants.VALIDATION_MSG.MAX_NUMBER}`,
              'any.required': `"roll_no" ${constants.VALIDATION_MSG.REQUIRED}`,
            }),
          address: Joi.string().min(1).max(30).optional()
            .messages({
              'string.empty': `"address" ${constants.VALIDATION_MSG.EMPTY_STRING}`,
              'string.min': `"address" ${constants.VALIDATION_MSG.MIN_STRING}`,
              'string.max': `"address" ${constants.VALIDATION_MSG.MAX_STRING}`,
            }),
        },
      },
      update: {
        params: {
          id: Joi.number().required().messages({
            'number.base': `"rollNo" ${constants.VALIDATION_MSG.BASE_NUMBER}`,
            'any.required': `"id" ${constants.VALIDATION_MSG.REQUIRED}`,
          }),
        },
        body: {
          name: Joi.string().min(3).max(20).required()
            .messages({
              'string.base': `"name" ${constants.VALIDATION_MSG.BASE_STRING}`,
              'string.empty': `"name" ${constants.VALIDATION_MSG.EMPTY_STRING}`,
              'string.min': `"name" ${constants.VALIDATION_MSG.MIN_STRING}`,
              'string.max': `"name" ${constants.VALIDATION_MSG.MAX_STRING}`,
              'any.required': `"name" ${constants.VALIDATION_MSG.REQUIRED}`,
            }),
          class_no: Joi.string().min(1).max(10).required()
            .messages({
              'string.empty': `"class_no" ${constants.VALIDATION_MSG.EMPTY_STRING}`,
              'string.min': `"class_no" ${constants.VALIDATION_MSG.MIN_STRING}`,
              'string.max': `"class_no" ${constants.VALIDATION_MSG.MAX_STRING}`,
              'any.required': `"class_no" ${constants.VALIDATION_MSG.REQUIRED}`,
            }),
          roll_no: Joi.number().min(1).max(100).required()
            .messages({
              'number.base': `"roll_no" ${constants.VALIDATION_MSG.BASE_NUMBER}`,
              'number.empty': `"roll_no" ${constants.VALIDATION_MSG.EMPTY_STRING}`,
              'number.min': `"roll_no" ${constants.VALIDATION_MSG.MIN_NUMBER}`,
              'number.max': `"roll_no" ${constants.VALIDATION_MSG.MAX_NUMBER}`,
              'any.required': `"roll_no" ${constants.VALIDATION_MSG.REQUIRED}`,
            }),
          address: Joi.string().min(1).max(30).optional()
            .messages({
              'string.empty': `"address" ${constants.VALIDATION_MSG.EMPTY_STRING}`,
              'string.min': `"address" ${constants.VALIDATION_MSG.MIN_STRING}`,
              'string.max': `"address" ${constants.VALIDATION_MSG.MAX_STRING}`,
            }),
        },
      },
      get_delete: {
        params: {
          id: Joi.number().required().messages({
            'number.base': `"id" ${constants.VALIDATION_MSG.BASE_NUMBER}`,
            'any.required': `"id" ${constants.VALIDATION_MSG.REQUIRED}`,
          }),
        },
      },
    };

    let joiSchema = '';
    switch (req.method) {
    case METHOD_TYPE[0]:
    case METHOD_TYPE[1]:
      joiSchema = Joi.object(obj.get_delete).unknown(true);
      break;
    case METHOD_TYPE[2]:
      joiSchema = Joi.object(obj.create).unknown(true);
      break;
    default:
      joiSchema = Joi.object(obj.update).unknown(true);
    }

    const errorTxt = await joiSchema.validate(req).error;
    if (errorTxt) {
      resp.status(400).send(errorTxt.message);
    }

    next();
  } catch (error) {
    resp.status(500).send(error);
  }
};

module.exports = {
  validation,
};
