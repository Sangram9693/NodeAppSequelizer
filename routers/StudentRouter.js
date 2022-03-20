const express = require('express');

const router = express.Router();
const studentController = require('../controllers/StudentController');
const validationService = require('../middlewares/validation');

router.post('/create', validationService.validation, studentController.createStudent);
router.put('/update/:id', validationService.validation, studentController.updateStudent);
router.get('/all', studentController.getAllStudent);
router.get('/:id', validationService.validation, studentController.getByStudentId);
router.delete('/:id', validationService.validation, studentController.deleteStudent);

module.exports = router;
