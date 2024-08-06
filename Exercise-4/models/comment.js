const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    userID: { type: Number, trim: true, required: true },
    postID: { type: Number, trim: true, required: true },
    comment: { type: String, trim: true, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("comment", commentSchema);
