const sendVerificationEmail = require("../config/sendVerificationEmail");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")
const otpGenerator = require('otp-generator');

exports.checkOTP = async (req, res, next) => {
  try {
    const { otp ,id} = req.body;

    // Check if user is already present
    const currentUser = await User.findById(id);

    if (!currentUser) {
      return res.status(401).json({
        success: false,
        message: "User not exists",
      });
    }

    if (currentUser.isVerified) {
      throw new Error("User Already Verified")
    }

    if (otp !== currentUser?.otp) {
      return res.status(401).json({
        success: false,
        message: "OTP does not match",
      });
    }




      


    const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

    const verifiedUser = await User.findByIdAndUpdate(
      id,
      {
        isVerified: true,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "User Verified Successfully!!",
      data:verifiedUser,
      token
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};


exports.otpResend = async (req, res, next) => {
  try {

    const { id } = req.body;
    // Check if user is already present
    const currentUser = await User.findById(id);

    if (!currentUser) {
      return res.status(401).json({
        success: false,
        message: "User not exists",
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });





      

      await sendVerificationEmail(currentUser.email,otp)


    const updatedOtpUser = await User.findByIdAndUpdate(
      id,
      {
        otp,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "User Resend Successfully!!",
      data:updatedOtpUser,
 
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

