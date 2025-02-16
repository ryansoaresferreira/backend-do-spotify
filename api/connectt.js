import {MongoClient} from "mongodb"

const URL = "mongodb+srv://fmariaevanilda:2HwDWkFfzMNlLnqS@cluster1.hml2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

const client = new MongoClient(URL);

export const db = client.db("spotify");
//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);


