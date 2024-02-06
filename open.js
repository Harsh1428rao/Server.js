const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.open('demo2.txt', 'w', (err, fileDescriptor) => {
        if (err) {
            console.error('Error:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
        console.log('Success! File opened for writing.');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File opened for writing');
    });
});

const port = 8080;

server.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
