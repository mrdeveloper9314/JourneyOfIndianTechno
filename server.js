const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can use any port number

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the ancient technology page
app.get('/ancient-tech.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ancient-tech.html'));
});

// Route for the medieval technology page
app.get('/medieval-tech.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'medieval-tech.html'));
});

// Route for the present technology page
app.get('/present-tech.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'present-tech.html'));
});

// Route for the future technology page
app.get('/future-tech.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'future-tech.html'));
});

// Route for the quiz page
app.get('/quiz.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quiz.html'));
});

// Route for the about developers page
app.get('/about-developers.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about-developers.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
