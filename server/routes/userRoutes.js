const express = require('express');
const authController = require("../controller/userController")
const otpController = require("../controller/otpController")



const router = express.Router();

router.post("/signup",authController.signup);
router.post("/verify-otp",otpController.checkOTP);
router.post("/resend-otp/",otpController.otpResend);


router.post("/login",authController.login);
router.post("/forgot-password",authController.forgotPassword);
router.post("/reset-password/:id",authController.userPasswordReset);
router.get("/:id",authController.getCurrentUser);

router.get("/",authController.getAllUsers);
router.delete('/:id', authController.deleteUser);
router.put('/:id', authController.updateUser);



module.exports = router