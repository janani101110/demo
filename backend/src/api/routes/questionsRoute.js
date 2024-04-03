const express = require('express');
const { getquestions, getAQuestion } = require('../controllers/questionsControllers/getController');
const { incrementViewCount } = require('../controllers/questionsControllers/updateViewCount');



const router = express.Router();

//user operations routes
router.get('/', getquestions)
router.get('/:id', getAQuestion)
router.put('/views/:postId', incrementViewCount)




module.exports = router;