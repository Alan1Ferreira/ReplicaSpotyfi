import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://alanferreira041:YYkAPrq6qRFX71zQ@cluster0.xj3io.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotifyAula");
