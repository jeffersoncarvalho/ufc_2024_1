var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("./db/mongo")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var professoresRouter = require('./routes/professores')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//liberar o acesso
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/professores', professoresRouter);

//app.js <=> professores.js <=> ProfessoService.js <=> ProfessorModel.js e db_professores.js

module.exports = app;
