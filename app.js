const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');

const app = express();

app.engine('velux', (filePath, options, callback) => {
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
    })
})
app.set('views', './views');
app.set('view engine', 'velux')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);

module.exports = app;
