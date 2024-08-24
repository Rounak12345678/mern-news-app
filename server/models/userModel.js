const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const sendVerificationEmail = require("../config/sendVerificationEmail");


const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name!!!"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email!!!"],
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email!!!"],
    },

    password: {
      type: String,
      required: [true, "Please provide a password!!!"],
      minlength: 8,
      select: true,
    },
    confirmPassword: {
      type: String,
      required: [true, "Please provide a confirm password!!!"],
      select: true,
      validate: {
        validator: (el) =>
          function () {
            return el !== this.password;
          },
      },
    },
    otp:{
      type:String,
    },
    isVerified:{
      type:Boolean
    },
    role:{
      type:String,
      default: 'user',
    }

  });




userSchema.pre("save", async function (next) {
  console.log("New document saved to the database");
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

  userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
      this.confirmPassword = undefined;
      next();
    } else {
      next();
    }
  });



  userSchema.methods.passwordCheck = async function (
    currentPassword,
    userPassword
  ) {
    return await bcrypt.compare(currentPassword, userPassword);
  };
  

  module.exports = new mongoose.model("User", userSchema);
