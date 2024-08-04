let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get("/", (req, res) => {
    Controllers.userController.getPosts(res);
});
// Adds a POST route to create a new user
router.post("/create", (req, res) => {
    Controllers.userController.createPost(req.body, res);
});

router.put("/:id", (req, res) => {
    Controllers.userController.updatePost(req, res);
});

router.delete("/:id", (req, res) => {
    Controllers.userController.deletePost(req, res);
});

module.exports = router;
