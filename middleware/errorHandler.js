 function errorHandler(err, req, res, next) {
  console.error("🔥 Error caught by middleware:", err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
}
export default errorHandler;