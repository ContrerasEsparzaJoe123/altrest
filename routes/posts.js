const express = require ('express');

const router = express.Router();
const Post = require('../models/post');
//get all posts
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find().limit(1);
        res.json(posts);
    } catch (err) {
        res-json({message: err});
    }
    });
//submit post
    router.post('/', async (req, res) => {
        const post = new Post({
            pulso: req.body.pulso,
            fecha: req.body.fecha,
            sensor: req.body.sensor,
            
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