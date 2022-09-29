const express = require('express');
const router = require('../router/router');
const app = express();

//middleware
app.use(express.json());

// default service call(actuator)
app.get("/", (req,res,next)=>{
    res.status(200).json({
        message: "Server is up"
    })
})
// cors
// localhost:3000/
app.use('/', router);
app.use('/89', router);

//add middleware to handle errors and bad
app.use((req,res,next)=>{
    const error = new Error("NOt Found");
    error.status= 404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        }
    })
});

module.exports = app;