const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static('/dist/AlejandroFabraPortfolio'));

// Send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join( __dirname,'/dist/AlejandroFabraPortfolio/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);