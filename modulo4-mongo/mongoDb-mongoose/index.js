const mongoose = require("mongoose");
//prettier-ignore
mongoose.connect("mongodb+srv://joao-oliveira:258002@cluster0.aovy8.mongodb.net/Students?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true,})
.catch((err) => "Erro ao conectar Localhost")

//Criação do Modelo Schema
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  nota: {
    type: Number,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  mediaFinal: {
    type: Number,
    require: true,
  },
  school: {
    type: String,
    require: true,
  },
  lastModify: {
    type: Date,
    default: Date.now(),
  },
});
// Definindo o modelo da Coleção Student
mongoose.model("alunos", studentSchema);

const alunos = mongoose.model("alunos");

new alunos({
  name: "Rui Patrício",
  nota: 5,
  subject: "Aula Interativa",
  mediaFinal: 7,
  school: "Anhanguera",
})
  .save()
  .then(() => console.log("Documento Inserido"))
  .catch((err) => console.log("Erro de Conexão"));
