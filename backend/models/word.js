const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
	word: { type: String, required: true },
	meaning: { type: String, required: true },
	date: { type: Date, default: Date.now }, // Use Date type and set a default value as the current date
});

module.exports = mongoose.model("Word", wordSchema);
