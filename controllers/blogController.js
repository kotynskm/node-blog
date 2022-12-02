// get the Blog model from models folder
const Blog = require('../models/blogModel');

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).render('index', {
    title: 'All Node Blogs',
    blogs,
  });
};

exports.getEditPage = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  res.status(200).render('edit', {
    title: 'Edit Blog',
    blog,
  });
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      summary: req.body.summary,
      content: req.body.content,
    }
  );

  if (!blog)
    return next(new ErrorResponse(`No blog found with ID of ${req.params.id}`));

  res.status(200).redirect('/');
};

exports.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  res.status(200).render('blog', {
    title: 'Blog Details',
    blog,
  });
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};

exports.createBlog = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((response) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};
