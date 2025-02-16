import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/API/", (request, response) => {
  response.send("Hello World");
});

app.get("/API/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/API/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../../Front-End/dist")));

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "../../Front-End/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta: ${PORT}`);
});
