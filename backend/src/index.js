  
const express = require('express');
const app = express();
var cors = require('cors')
require('dotenv').config();
require('./db/mongoose');
const userRouter = require('./routers/users');
// const taskRouter = require('./router/tasks');


app.use(express.json());
app.use(cors());
app.use(userRouter);

// app.use(taskRouter);

console.log('///////////////url',process.env)

const port = process.env.PORT ;

app.listen(port,()=>{
    console.log('the port is listening at '+port);
})