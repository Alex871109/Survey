module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    res.status(403);
    throw new Error('error: Not enough credits');
  }

  next();
};
