import express from "express";
import mongoose from "mongoose";
import { studentRouter } from "./routes/studentRouter.js";

mongoose
  .connect(
    "mongodb+srv://joao-oliveira:258002@cluster0.aovy8.mongodb.net/Students?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => "Erro ao conectar Localhost");

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log("Servidor Conectado"));
