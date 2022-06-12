import express from 'express';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use("/static", express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})


app.listen(3000, function () {
    console.log('listening on 3000');
})