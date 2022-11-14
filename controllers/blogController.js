// get the Blog model from models folder
const Blog = require('../models/blogModel');

exports.getAllBlogs = async (req, res) => {
  try {
    // find all the blogs
    const blogs = await Blog.find();

    res.status(200).json({
      status: 'success',
      data: {
        blogs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
