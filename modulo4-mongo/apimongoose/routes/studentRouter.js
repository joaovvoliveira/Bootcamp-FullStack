import express from "express";
import { studentModel } from "../models/student.js";
const app = express();

app.get("/student", async (req, res) => {
  try {
    const alunos = await studentModel.find({}, {});
    res.send(alunos);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/student", async (req, res) => {
  try {
    const alunos = new studentModel(req.body);
    await alunos.save();

    res.send(alunos);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/student/:id", async (req, res) => {
  try {
    const alunos = await studentModel.findOneAndDelete({ _id: req.params.id });
    if (!alunos) {
      res.status(404).send("Documento não encontrado");
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/students/:id", async (req, res) => {
  try {
    const alunos = await studentModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(alunos);
    if (!alunos) {
      res.status(404).send("Documento não encontrador");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as studentRouter };
