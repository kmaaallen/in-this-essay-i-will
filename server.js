import { createServer } from 'http';
import { readFile, readFileSync } from 'fs';

createServer((req, res) => {
    if (req.url === "/") {
        readFile('src/index.html', (err, html) => {
            if (err) {
                throw err;
            }
            res.setHeader('Content-type', 'text/html');
            res.write(html);
            res.statusCode = 200;
            res.end();
        });
    }
    else if (req.url == '/styles/style.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(readFileSync('styles/style.css'));
        res.end();
    } else if (req.url == '/index.js') {
        res.setHeader('Content-type', 'text/javascript');
        res.write(readFileSync('src/index.js'));
        res.end();
    } else {
        res.write("invalid request")
        res.end();
    }
}).listen(3000);