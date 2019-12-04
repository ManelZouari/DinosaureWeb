const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
      console.log('heello');
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const dinosaureId = decodedToken._id;
    console.log(dinosaureId);
    console.log(req.body._id);
    if (req.body._id && req.body._id !== dinosaureId) {
      throw 'Invalid dinosaure ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};