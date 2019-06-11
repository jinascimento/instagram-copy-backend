const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

const app = express();

mongoose.connect('mongodb://localhost/instagram-copy',
    {useNewUrlParser: true}
    )

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'))

app.listen(3003)
