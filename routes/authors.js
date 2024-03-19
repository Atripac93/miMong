const express = require("express");
const router = express.Router();
const AuthorsModel = require("../models/authors");

router.get("/getAuthors", async (req, res) => {
  try {
    const authors = await AuthorsModel.find();
    res.status(200).send(authors);
  } catch (e) {
    res.status(500).send({
      statusCode: 500,
      message: "internal serve error",
    });
  }
});

router.get("/getAuthors/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const author = await AuthorsModel.findById(id);
    if (!author) {
      return res.status(404).send({
        statusCode: 404,
        message: "Author not here",
      });
    }
    res.status(200).send(author);
  } catch (e) {
    res.status(500).send({
      statusCode: 500,
      message: "big error",
    });
  }
});

router.post("/createAuthors", async (req, res) => {
  const newAuthors = new AuthorsModel({
    nome: req.body.nome,
    cognome: req.body.cognome,
    email: req.body.email,
    dataDiNascita: req.body.dataDiNascita,
    avatar: req.body.avatar,
  });
  try {
    const authorsToSave = await newAuthors.save();
    res.status(201).send({
      statusCode: 201,
      payload: authorsToSave,
    });
  } catch (e) {
    res.status(500).send({
      statusCode: 500,
      message: "internal problem",
    });
  }
});

module.exports = router;
