const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware function to verify JWT token
const verifyToken = (req, res, next, ) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send('Unauthorized: Token missing');
    }
  
    // Ensure the Authorization header has the correct format
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).send('Unauthorized: Invalid token format');
    }
  
    const token = tokenParts[1];

    
  // Verify the token
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    console.log(process.env.SECRET_KEY);
    if (err) {
      console.error('Token verification failed:', err);
      // Token is not valid
    } else {
      console.log('Token is valid');
      // Token is valid, decoded contains the decoded payload
      console.log(decoded);
      next();
    }
  });
};

module.exports = verifyToken;