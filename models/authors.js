const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    cognome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dataDiNascita: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("AuthorsModel", AuthorsSchema, "authors");
