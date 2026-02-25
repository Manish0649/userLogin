const express = require('express');
const { createPost, getAllPost, getPost ,updatePost,deletePost} = require('../controllers/postController');
const authToken = require('../middleware/checkToken');

const router = express.Router();

router.post('/create',authToken,createPost)
router.get('/get:id',getPost)
router.get('/all',getAllPost)
router.put('/update/:id',updatePost)
router.delete('/delete/:id',deletePost)

module.exports = router;