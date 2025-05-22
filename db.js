const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mohdarish8482:babbanbillo8482@learning-cluster1.91lka6y.mongodb.net/paytm"
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);

const User = mongoose.model("User", userSchema);

module.exports = { User, Account };
