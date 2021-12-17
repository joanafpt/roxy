const express = require("express");
const router = express.Router();
const comment_controller = require("../controllers/commentController");

router.post("/comment", comment_controller.comment);

router.get("/commentslist", comment_controller.commentsList);

module.exports = router;
