const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // default port: 3000

// Set public directory as static root
app.use(express.static(path.join(__dirname, 'public')));

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Default endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start app
app.listen(port, () => {
    console.log(`App listening on port ${port} ...`);
});

// On exit:
process.on('exit', () => {
    console.log(`Process exited on port: ${port}`);
});
