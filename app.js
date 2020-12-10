const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');

const { secret } = require('./config.json');
const routes = require('./routes/index');
const session = require('express-session');

const app = express();

/* app.engine('velux', (filePath, options, callback) => {
    fs.readFile(filePath, (err, data) => {
        let rendered = data.toString();

        rendered = rendered.replace(/{{ .+ }}/g, (match) => {
            const option = /{{ (.+) }}/.exec(match)[1];

            if (options.hasOwnProperty(option)) {
                return options[option];
            } else {
                return 'undefined';
            }
        });

        return callback(null, rendered);
    });
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'velux'); */

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(multer().array());
app.use(session({secret}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;
