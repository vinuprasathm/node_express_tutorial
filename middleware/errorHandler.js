const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.Validation_Error:
      res.json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case constants.Not_Found:
      res.json({
      title: "Not Found",
      message: err.message,
      stackTrace: err.stack
    });
    case constants.UnAuthorized:
      res.json({
      title: "Un-Authorized",
      message: err.message,
      stackTrace: err.stack
    });
    case constants.Forbidden:
      res.json({
      title: "Forbidden",
      message: err.message,
      stackTrace: err.stack
    });
    case constants.Server_Error:
      res.json({
      title: "Server Error",
      message: err.message,
      stackTrace: err.stack
    });
    default:
      break;
  }
};

module.exports = errorHandler;