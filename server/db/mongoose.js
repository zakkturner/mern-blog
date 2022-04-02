const mongoose = require("mongoose");
const dotenv = require("dotenv");
main().catch((err) => console.log(err));

async function main() {
  dotenv.config();
  await mongoose
    .connect(`${process.env.Mongo_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection successful");
    })
    .catch((err) => {
      console.log(err);
    });
}
