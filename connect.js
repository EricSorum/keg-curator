import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

async function run() {
    try {
      console.log(typeof client)
        await client.connect();
        console.log("Successfully connected to Atlas");
        const db = client.db("keg_curator");
        const rawBeers = db.collection("beer_list");
        const filter = {"style": "IPA"}
        const ipa = await rawBeers.findOne(filter);
        // console.log("beer: " + JSON.stringify(ipa)
        const allbeers = await rawBeers.find().toArray();
        // console.log(allbeers);
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);