const app = require('./app');
const port = 3000;
// initial testing route
app.get('/', (req, res) => {
  res.render('index');
});

// listen to port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
