var express = require('express');
const path = require('path');
const app = express();

// USING STATIC FODLER DIRECTORY WHICH HAS MY CSS
app.use('/static', express.static(path.join(__dirname, 'static')));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'demofile1.html'));
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
