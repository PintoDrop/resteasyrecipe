const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI || process.env.LOCAL_URI);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/RestEasyRecipeDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
