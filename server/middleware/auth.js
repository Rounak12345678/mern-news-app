const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); 

const auth = async (req, res, next) => {
    const token = req.header('authorization');
  

    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }
  
    try {
      // Verify token
      const decodedToken = token.split(" ")[1]
      const decoded = await jwt.verify(decodedToken, process.env.JWT_SECRET);

      req.userId = decoded.id
  
      if (!req.userId) {
        return res.status(401).json({ msg: 'Token is not valid' });
      }

      next(); 
    } catch (err) {
      console.error('Token verification error:', err); // Log error details
  
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ msg: 'Token is expired' });
      }
  
      res.status(401).json({ msg: 'Token is not valid' });
    }
  };
  
  module.exports = auth;
