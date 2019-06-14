const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors')

const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server)

const url_database = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/instagram-copy'
    mongoose.connect(url_database,
    {useNewUrlParser: true}
    )

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'))

server.listen(process.env.PORT || 3003)
