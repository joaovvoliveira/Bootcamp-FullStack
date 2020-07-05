const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://joao-oliveira:258002@cluster0.aovy8.mongodb.net/<dbname>?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(async (err) => {
  const collection = client
    .db("sample_airbnb")
    .collection("listingsAndReviews");
  // perform actions on the collection object

  // Mostra todos os dados que possuem o Filtro abaixo
  const documents = await collection
    .find({ cancellation_policy: "moderate" }, { _id: 0 })
    .limit(3)
    .toArray();

  console.log(documents);

  // Consulta todas as Bases/Coleções Disponíveis
  const databaseList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databaseList.databases.forEach((db) => {
    console.log(` - ${db.name}`);
  });

  client.close();
});
