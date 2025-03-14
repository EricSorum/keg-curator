import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI as string; // Store in `.env` file
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectDB();

const database = client.db("yourDatabaseName"); // Replace with your DB name
const collection = database.collection("yourCollectionName"); // Replace with your collection

// API route to fetch data from MongoDB
app.get("/api/beers", async (req, res) => {
  try {
    const beers = await collection.find().toArray();
    res.json(beers);
  } catch (error) {
    console.error("Error fetching beers:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
