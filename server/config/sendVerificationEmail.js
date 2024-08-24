const transporter = require("./emailConfig");

  // Define a function to send emails
  const sendVerificationEmail =async (email, otp) =>{
    try {
      const info = await transporter.sendMail({
          from: 'rounak.barman@gmail.com',
          to: email,
          subject: "Verification Email",
          html: `<p>Here is your OTP code: ${otp}</p>`
        })
  
      console.log("Email sent successfully: ", info);
    } catch (error) {
      console.log("Error occurred while sending email: ", error);
      throw error;
    }
  };


  module.exports = sendVerificationEmail