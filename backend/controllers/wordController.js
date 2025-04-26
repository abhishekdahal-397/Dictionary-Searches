const Word = require("../models/word");

// Add a new word to the database
exports.addWord = async (req, res) => {
	const { word, meaning } = req.body;

	try {
		const newWord = new Word({ word, meaning });
		await newWord.save();
		res.status(201).json({ message: "Word added successfully", word: newWord });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Failed to add word", error: error.message });
	}
};

// Get all words from the database
exports.getAllWords = async (req, res) => {
	try {
		const words = await Word.find();
		res.status(200).json(words);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Failed to retrieve words", error: error.message });
	}
};
