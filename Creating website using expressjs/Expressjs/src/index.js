const path = require('path');
const express = require('express'); 
const app = express();             

// Specify the directory for serving static files (e.g., 'public' folder)
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));  // Now Express will serve static files from 'public'

// Dynamic Routes
app.get('/', (req, res) => {
  res.send("Welcome to the homepage");
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});

app.get('/user/:name', (req, res) => {
  const userName = req.params.name;  
  res.send(`Hello, ${userName}!`);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running at port 3000');
});
