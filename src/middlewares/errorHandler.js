import { errorResponse } from "../utils/responses.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;

  const message = statusCode === 500 ? "Internal Server Error" : err.message;

  return errorResponse(res, statusCode, message);
};
export default errorHandler;
