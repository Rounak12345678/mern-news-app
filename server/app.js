const express = require("express");
const userRouter = require("./routes/userRoutes");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path")
const app = express();



app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']  // Add 'Authorization' to allowed headers
  }));

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.json());

  app.use("/api/v1/users/", userRouter);


  module.exports = app