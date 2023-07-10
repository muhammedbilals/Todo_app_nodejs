const express = require('express');
const boy_parser = require('body-parser');
const userRouter =require('./routers/user.route')
const todoRouter =require('./routers/todo.route')

const app =express();

app.use(boy_parser.json())
app.use('/',userRouter);
app.use('/',todoRouter);


module.exports =app;