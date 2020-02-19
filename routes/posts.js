const express = require ('express');

const router = express.Router();
const Post = require('../models/post');
//get all posts
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res-json({message: err});
    }
    });
//submit post
    router.post('/', async (req, res) => {
        const post = new Post({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            city: req.body.city
        })
       try{
        const savedPost = await post.save(); 
      res.json(savedPost);
       }catch(err){
           res-json({message: err});
       }
        });
// specific post
        router.get('/:postId', async (req, res) => {
            try {
                const post = await Post.findById(req.params.postId);
                res.json(post);
            } catch (err) {
                res.json({message: err});
            }
        });

        router.delete('/:postId', async (req, res) => {
            try {
                const removedPost = await Post.deleteOne({_id: req.params.postId});
                res.json(removedPost);
            } catch (err) {
                res.json({message: err});
            }
        });


    module.exports = router;