const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    author_id: ObjectId,
    title: String,
    instruction: String,
    ingredients: Array
}, {
    timestamps: true
});

const Post = mongoose.model("Post", postSchema);

Post.createCollection();

module.exports = {
    postSchema: postSchema,
    Post: Post
};
