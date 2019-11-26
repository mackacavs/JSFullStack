// Bring in the express module
const express = require('express')

// Bring in the handlebars module
const exphbs = require('express-handlebars')

//Bring in the mongoose package
const mongoose = require('mongoose')

// Connect to mongoose
mongoose.connect('mongodb://localhost/nameofsatabase', {
  useUnifiedTopology: true, useNewUrlParser: true
})
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

// Watch out when using a testing framework as often you'll have to remove the console.log for the testing to work

//Load idea model
require('./Idea.js')

//Handlebars Middleware
//Here yu're default layout is main and you can add the seperate files into the 'main' file
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Initializes the application
const app = express();

// How middleware works
app.use(function (req, res, next) {
  req.name = 'Mac Dixon'
  // We now have access to the name property through the app
  next();
  // next(); means the application continues onto the next middleware
})

// Index Route
app.get('/', (req, res) => {
  res.render('index')
})

// About Route
app.get('/', (req, res) => {
  res.send("About")
})

//Checks to see if the server is working
const port = 5000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`)
});
