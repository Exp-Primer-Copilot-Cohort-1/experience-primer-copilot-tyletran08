// Create web server
// 1. Create web server
// 2. Create route
// 3. Create template
// 4. Send response

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Create web server
const app = express();
const port = 3000;
const commentsPath = path.join(__dirname, 'comments.json');

// Set up template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Create route
app.get('/comments', (req, res) => {
  // Read comments from file
  fs.readFile(commentsPath, (err, data) => {
    // If error, send error response
    if (err) {
      res.status(500).send('Server error');
      return;
    }

    // Parse comments from file
    const comments = JSON.parse(data);

    // Render comments template with comments
    res.render('comments', { comments });
  });
});

app.post('/comments', (req, res) => {
  // Read comments from file
  fs.readFile(commentsPath, (err, data) => {
    // If error, send error response
    if (err) {
      res.status(500).send('Server error');
      return;
    }

    // Parse comments from file
    const comments = JSON.parse(data);

    // Add new comment to comments array
    comments.push(req.body.comment);

    // Write comments to file
    fs.writeFile(commentsPath, JSON.stringify(comments), err => {
      // If error, send error response
      if (err) {
        res.status(500).send('Server error');
        return;
      }

      // Redirect to comments page
      res.redirect('/comments');
    });
  });
});

// Start web server
app.listen(port, () => console.log(`Listening on port ${port}`));