const http = require('http');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

// Parse command-line arguments for port
const args = minimist(process.argv.slice(2));
const PORT = args.port || 3000;

// Serve HTML files
const serveFile = (res, filePath) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
};

// Create server
const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        serveFile(res, path.join(__dirname, 'home.html'));
    } else if (req.url === '/project') {
        serveFile(res, path.join(__dirname, 'project.html'));
    } else if (req.url === '/registration') {
        serveFile(res, path.join(__dirname, 'registration.html'));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
});

// Start server
server.listen(5000);