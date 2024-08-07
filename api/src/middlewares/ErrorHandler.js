// not found
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// error handler
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    status: false,
    message: err?.message,
    stack: err?.stack,
  });
};

const notAuthorized = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 401 : res.statusCode;
  res.status(statusCode);
  res.json({
    status: false,
    message: err?.message,
    stack: err?.stack,
  });
};

export { notFound, errorHandler, notAuthorized };