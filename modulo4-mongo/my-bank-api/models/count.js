import mongoose from "mongoose";
//Definindo o Modelo do Schema
const accountSchema = mongoose.Schema({
  agencia: {
    type: "Number",
    required: true,
  },
  conta: {
    type: "Number",
    required: true,
  },
  name: {
    type: "String",
    required: true,
  },
  balance: {
    type: "String",
    validate(balance) {
      if (balance < 0) throw new Error("Valor Negativo não é Inválido");
    },
  },
});
//Definindo o Modelo da Coleção Counts
const accountModel = mongoose.model("counts", accountSchema);

export { accountModel };
