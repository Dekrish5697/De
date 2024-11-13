// Import the Express module
const express = require('express');
// Initialize the app
const app = express();
// Define a port
const PORT = 3000;
// Create a simple route
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    if (req.url === '/contact'){
        return res.send('Middle ware');
    }
    next();
    });
app.get('/', (req, res) => {
  res.send('Hello, World! This is your basic Express server.');
});
app.get('/about', (req, res) => {
    res.send('This is the About Page.');
    });
    app.get('/contact', (req, res) => {
    res.send('This is the Contact Page.');
    });
// Start the server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
