var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
const validator = require('validator');

var UserSchema = new mongoose.Schema({
     username: String,
     password: String

  // tokens:[{
  //   access: {
  //     type: String,
  //     required: true
  //   },
  //   token: {
  //     type: String,
  //     required: true
  //   }
  // }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
