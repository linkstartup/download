var express = require('express');
var router = express.Router();
var moment=require('moment');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// const server = 'www.indo123.co/';
// const server = 'http://localhost/';
const fs = require("fs");

const fileUpload = require('express-fileupload');

const path = require('path');
var ObjectId = require('mongodb').ObjectID;

const collection = "todo";
const collection2 = "user";
const collection3 = "t";
const collection4 = "tuanzhang";
const collection5 = "joinmember";
const hi = "hi";

const app = express();


const testFolder = '../';



app.use(bodyParser.json({
    limit: '50mb',
    extended: true
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000

}));


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './seed.html'));
// })



//读取文件目录
app.post('/seed', (req, res) => {

    fs.readdir(testFolder, (err, files) => {
        res.json({
            files:files,
        })
    })






});







// Middleware for handling Error
// Sends Error Response Back to User
app.use((err, req, res, next) => {
    res.status(err.status).json({
        error: {
            message: err.message
        }
    });
})

app.listen(8888, () => {

    console.log('connected to database, app listening on port 8888');
});