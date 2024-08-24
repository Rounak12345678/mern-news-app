
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config({ path: "./config.env" })

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
   service: 'gmail',
  secure: false, // true for 465, false for other ports
  auth: {
    user: "rounak.barman@gmail.com", // Admin Gmail ID
    pass: 'fbcv pnaf hucv aydc', // Admin Gmail Password
  },
})

module.exports =  transporter