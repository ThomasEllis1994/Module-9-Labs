"use strict";
let Models = require("../models"); // matches index.js

const getComments = (res) => {
    // finds all Comments
    Models.Comment.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const createComment = (data, res) => {
    // creates a new Comment using JSON data POSTed in request body
    console.log(data);
    new Models.Comment(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateComment = (req, res) => {
    // updates the Comment matching the ID from the param using JSON data POSTed in request body
    console.log(req.body);
    Models.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const deleteComment = (req, res) => {
    // deletes the Comment matching the ID from the param
    Models.Comment.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
// ++ Test updating and deleting a Comment using Postman
module.exports = {
    getComments,
    createComment,
    updateComment,
    deleteComment,
};
