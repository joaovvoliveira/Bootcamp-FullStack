import mongoose from "mongoose";
//Criação do Modelo Schema
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  nota: {
    type: Number,
    required: true,
    validate(nota) {
      if (nota < 0) throw new Error("Valor negativo não vale");
    },
  },
  subject: {
    type: String,
    required: true,
  },
  mediaFinal: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  lastModify: {
    type: Date,
    default: Date.now(),
  },
});
// Definindo o modelo da Coleção Student
const studentModel = mongoose.model("alunos", studentSchema);

export { studentModel };
