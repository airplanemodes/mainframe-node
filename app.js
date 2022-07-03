const express = require('express');
const path = require('path');
const http = require('http');

const { routes } = require('./routes/config');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
routes(app);

const server = http.createServer(app);

let port = process.env.PORT || '3500';
server.listen(port, () => console.log(`Listening on port ${port}...`));