
const { MongoClient, ServerApiVersion } = require('mongodb');
const username = encodeURIComponent("ejsorum@gmail.com");
const password = encodeURIComponent("#Dw$$96172");
const cluster = "cluster0.6zoro.mongodb.net";
// const authSource = "<authSource>";
// const authMechanism = "<authMechanism>";
const uri = `${username}:${password}@${cluster}/?retryWrites=true&w=majority&appName=Cluster01`;
// const ur2 = `mongodb+srv://${username}:${password}@cluster0.6zoro.mongodb.net/`
// const ur2 = `mongodb+srv://ejsorum:@cluster0.6zoro.mongodb.net/`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
