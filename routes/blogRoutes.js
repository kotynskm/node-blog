const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// routes
router.route('/').get(blogController.getAllBlogs);
router.route('/:id').get(blogController.getBlog);
router.route('/delete/:id').post(blogController.deleteBlog);

module.exports = router;
