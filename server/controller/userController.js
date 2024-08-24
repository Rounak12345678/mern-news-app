const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const otpGenerator = require('otp-generator');
const User = require("../models/userModel");
const transporter = require("../config/emailConfig")

exports.signup = async (req, res, next) => {
    try {
   
  
      let otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
  
      const payload = {
        ...req.body,
        otp,
        isVerified:false
      }
  
  
      const newUser = await User.create(payload);
  
      res.status(201).json({
        status: "success",
    
        message:"OTP has been sent to your mailId",
        data: {
          user: newUser,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  };



  exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      if (!email && !password) {
        return next(
          res.status(400).json({
            status: "fail",
            message: "Please provide email and password!!!",
          })
        );
      }
  
      const user = await User.findOne({ email: email }).select("+password");
  
      if(!user.isVerified){
        return next(
          res.status(400).json({
            status: "fail",
            message: "User is not verified!!!",
          })
        );
      }
  
      if (!user || !(await user.passwordCheck(password, user.password))) {
        return next(
          res.status(400).json({
            status: "fail",
            message: "Password or Email is incorrect!!!",
          })
        );
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
  
      res.status(200).json({
        status: "success",
        token,
        data: {
          user,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  };




  exports.forgotPassword = async (req, res, next) => {
    const { email } = req.body
    if (email) {
      const user = await User.findOne({ email: email })
      if (user) {
  
        const link = `http://localhost:9002/auth/reset-password/${user._id}`
        console.log(link)
        // Send Email
       const info = await transporter.sendMail({
          from: 'rounak.barman@gmail.com',
          to: user.email,
          subject: "GeekShop - Password Reset Link",
          html: `<a href=${link}>Click Here</a> to Reset Your Password`
        })
        if(!info){
          throw new Error("error happned")
        }
        res.send({ "status": "success", "message": "Password Reset Email Sent... Please Check Your Email" })
      } else {
        res.send({ "status": "failed", "message": "Email doesn't exists" })
      }
    } else {
      res.send({ "status": "failed", "message": "Email Field is Required" })
    }
  };




exports.userPasswordReset = async (req, res) => {
  const { password, password_confirmation } = req.body
  const { id } = req.params
  const user = await User.findById(id)

  try {
    
    if (password && password_confirmation) {
      if (password !== password_confirmation) {
        res.send({ "status": "failed", "message": "New Password and Confirm New Password doesn't match" })
      } else {
       
        const newHashPassword = await bcrypt.hash(password, 12)
        await User.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } })
        res.send({ "status": "success", "message": "Password Reset Successfully" })
      }
    } else {
      res.send({ "status": "failed", "message": "All Fields are Required" })
    }
  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "Invalid Token" })
  }
}





  exports.getAllUsers = async (req, res, next) => {
    try {
    
      const user = await User.find();
      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "No users Found!!!",
      });
    }
  };
  

  exports.getCurrentUser = async (req, res, next) => {
    try {
  
     
      const currentUser = await User.findById(req.params.id).select("-password");
      res.status(200).json({
        status: "success",
        data: {
          currentUser,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "No users Found!!!",
      });
    }
  };





  exports.updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const {name} = req.body; 
  
      const updatedUser = await User.findByIdAndUpdate(id, {name}, {
        new: true,
     
      });
  
      if (!updatedUser) {
        return res.status(404).json({
          status: "fail",
          message: "User not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        data: {
          updatedUser,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "Error updating user",
      });
    }
  };
  
  
  
  exports.deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({
          status: "fail",
          message: "User not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        message: "User deleted successfully",
        data: {
          deletedUser,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "An error occurred while deleting the user",
      });
    }
  };