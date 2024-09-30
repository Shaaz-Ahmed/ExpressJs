// const express = require("express");
// const app = express();
// const path = require("path");


// This two are gonna to be used to host our website using express
// const staticPath = path.join(__dirname, '../public');
// app.use(express.static(staticPath));

// This are going to be used in template enginer hbs
const express = require('express');
const app = express();

// Set the view engine and views folder
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
