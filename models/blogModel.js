const mongoose = require('mongoose');
const { Schema } = mongoose;

// create a schema for a blog
const blogSchema = new Schema({
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  content: {
    type: String,
  },
});

// create blog model
const Blog = mongoose.model('Blog', blogSchema);
// export the model
module.exports = Blog;
