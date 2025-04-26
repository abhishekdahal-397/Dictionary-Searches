const express = require("express");
const router = express.Router();
const wordController = require("../controllers/wordController");

// Route to add a new word
router.post("/add-word", wordController.addWord);

// Route to get all words
router.get("/words", wordController.getAllWords);

module.exports = router;
