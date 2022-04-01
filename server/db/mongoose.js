const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(
      "mongodb+srv://zak:zak@emaily.dfzjr.mongodb.net/blog?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("connection successful");
    })
    .catch((err) => {
      console.log(err);
    });
}
