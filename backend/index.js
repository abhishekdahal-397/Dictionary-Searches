const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const wordRoutes = require("./routes/wordRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

app.use(express.json()); // to parse JSON request bodies

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log("MongoDB connection error: ", err));

// Routes
app.use("/api", wordRoutes); // Prefix all routes with '/api'

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
