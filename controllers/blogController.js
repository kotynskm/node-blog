// get the Blog model from models folder
const Blog = require('../models/blogModel');

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).render('index', {
    title: 'All Node Blogs',
    blogs,
  });
};

exports.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  res.status(200).render('blog', {
    title: 'Blog Details',
    blog,
  });
};

exports.deleteBlog = async (req, res) => {
  await Blog.deleteOne({ _id: req.params.id })
    .then((response) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};
