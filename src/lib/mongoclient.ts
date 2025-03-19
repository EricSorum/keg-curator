
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI; // Ensure you have this in your .env file
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function fetchMongoList() {
  try {
    await client.connect();
    const database = client.db("yourDatabaseName"); // Replace with your DB name
    const collection = database.collection("yourCollectionName"); // Replace with your collection name
    const beers = await collection.find().toArray();
    return beers;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    await client.close();
  }
}