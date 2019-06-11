const express = require('express')
const multer = require('multer')

const PostController = require('./controllers/postController')
const LikeController = require('./controllers/likeController')
const uploadConfig = require('./config/upload')


const routes = new express.Router()
const upload = multer(uploadConfig);
// Posts
routes.post('/posts', upload.single('image'), PostController.store)
routes.get('/posts', PostController.index)
routes.post('/posts/:id/like', LikeController.store)

module.exports = routes