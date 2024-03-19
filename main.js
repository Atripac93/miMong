const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 3090;

const app = express();

const authorsRoute = require("./routes/authors");

app.use(express.json());

app.use("/", authorsRoute);

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error db connection"));
db.once("open", () => {
  console.log("db connected");
});

app.listen(PORT, () =>
  console.log(`connessione avvenuta con successo alla porta ${PORT}`)
);
