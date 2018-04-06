var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
const validator = require('validator');

var UserSchema = new mongoose.Schema({
     // username: String,
     // password: String
    username:{
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    trim: true,
    validate: {
      validator: (value)=>{
        return validator.isEmail(value);
      },
      message: '{value} is not an email'
    }
  },
  password:{
    type: String,
    required: true,
    minlength: 6
  }
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
