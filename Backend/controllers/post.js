const postModel = require('../models/post');

exports.postPost = (req, res) => {
    const userId = req.session.passport._id;
    const title = req.body.title;
    const instruction = req.body.instruction;
    const ingredients = req.body.ingredients.split(',');
    const level = req.body.level;

    try {
        const newPost = new postModel.Post ({
            author_id: userId,
            title: title,
            instruction: instruction,
            ingredients: ingredients,
            level: level
        });

        newPost.save().then(response => {
            console.log(response);
        });
        res.send('Upload succeed');
    } 
    catch (err) {
        res.status(500).json({message: err.message});
    };
};

exports.getAllPost = async (req, res) => {
    try {
        const posts = await postModel.Post.find({});

        const response = {posts};

        console.log(response);
        res.status(200).json(response);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.getPostByAuthorId = async (req, res) => {
    try {
        const userId = req.session.passport._id;

        const posts = await postModel.Post.find({author_id: userId});

        const response = {posts};
        console.log(response);
        res.status(200).json(response);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.updatePostById = async (req, res) => {
    try {
        const postId = req.params.postId;
        const title = req.body.title;
        const instruction = req.body.instruction;
        const ingredients = req.body.ingredient.split(',');
        const level = req.body.level; 

        await postModel.Post.findOneAndUpdate({_id: postId}, {
            title: title,
            instruction: instruction,
            ingredients: ingredients,
            level: level
        });
        res.redirect('/posts');
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.deletePostById = async (req, res) => {
    try {
        const postId = req.params.postId;
        
        await postModel.Post.findByIdAndDelete({_id: postId});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};