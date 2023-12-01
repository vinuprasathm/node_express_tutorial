const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ message: err.message, stackTrace: err.stack })
};
// created to handle errors
module.exports = errorHandler