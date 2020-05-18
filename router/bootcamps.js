const express = require('express')
const router = express.Router();
const { getbootcamp, getbootcamps, createbootcamp, updatebootcamps, deletebootcamps } = require('../controller/bootcamps')
const bootcamproute = router
router.route('/').get(getbootcamps).post(createbootcamp)
router.route('/:id').get(getbootcamp).put(updatebootcamps).delete(deletebootcamps)
module.exports = bootcamproute