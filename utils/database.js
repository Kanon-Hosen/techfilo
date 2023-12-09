const { MongoClient, ServerApiVersion } = require("mongodb");


const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.we2oxi5.mongodb.net/?retryWrites=true&w=majority `;

const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const db = async () => {
  try {
    await client.connect();
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  db,
  client,
};
