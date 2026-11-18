//* Helper function to format success response
export const successResponse = (res, statusCode = 200, data = null) => {
  return res.status(statusCode).json({
    status: statusCode,
    success: true,
    data,
  });
};

//* Helper function to format error response
export const errorResponse = (
  res,
  statusCode = 500,
  message = "Internal Server Error",
) => {
  return res.status(statusCode).json({
    status: statusCode,
    success: false,
    message,
  });
};
