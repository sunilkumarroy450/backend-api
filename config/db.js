const mongoose = require("mongoose");

const connect = async () => {
  return mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(console.log("connected to mongodb"))
    .catch((err) => console.log(err));
};
mongoose.set("strictQuery", false);
module.exports = connect;
