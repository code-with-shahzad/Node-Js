const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection.on("open", function () {
    console.log("Mongoose Connected Successfully!");
  });
  mongoose.connection.on("error", function(err) {
      console.log("Could not connect to mongo server!");
      return console.log(err.message);
    });