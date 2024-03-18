const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('authHeader:', authHeader);

  if (!authHeader) {
    return res.status(401).send('Unauthorized: Token missing');
  }

  const tokenParts = authHeader.split(' ');
  console.log('tokenParts:', tokenParts);

  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).send('Unauthorized: Invalid token format');
  }

  const token = tokenParts[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error('Token verification:', err);
      return res.status(401).send('Unauthorized: Token verification failed');
    } else {
      console.log('Token is valid');
      console.log(decoded);
      req.user = decoded; // Attach the decoded token data to the request
      next();
    }
  });
};

module.exports = verifyToken;
