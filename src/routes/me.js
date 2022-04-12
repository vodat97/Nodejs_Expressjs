const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/MeController');

//newController.index();
router.get('/stored/courses', courseController.storedCourse);

module.exports = router;
