module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(401);
    throw new Error('error: You must log in');
  }
  next();
};
