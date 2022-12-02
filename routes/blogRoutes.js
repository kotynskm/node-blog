const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// routes
router.route('/').get(blogController.getAllBlogs);
router.route('/edit/:id').get(blogController.getEditPage);
router.route('/update/:id').post(blogController.updateBlog);
router.route('/:id').get(blogController.getBlog);
router.route('/delete/:id').post(blogController.deleteBlog);
router.route('/create').post(blogController.createBlog);

module.exports = router;
