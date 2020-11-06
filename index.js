import express from 'express';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
