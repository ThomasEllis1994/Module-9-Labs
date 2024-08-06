"use strict";
let Models = require("../models"); // matches index.js

const getPosts = (res) => {
    // finds all Posts
    Models.Post.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const createPost = (data, res) => {
    // creates a new Post using JSON data POSTed in request body
    console.log(data);
    new Models.Post(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updatePost = (req, res) => {
    // updates the Post matching the ID from the param using JSON data POSTed in request body
    console.log(req.body);
    Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const deletePost = (req, res) => {
    // deletes the Post matching the ID from the param
    Models.Post.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
// ++ Test updating and deleting a Post using Postman
module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
};
