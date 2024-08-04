"use strict";

const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");

async function init() {
    await User.sync();
    await Post.sync();
    await Comment.sync();
}

init();
module.exports = {
    User,
    Post,
    Comment, // export the model
    // also export any extra models here
};
