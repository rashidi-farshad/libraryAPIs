import * as authService from "./auth.service.js";
import { successResponse } from "../../utils/responses.js";

export const register = async (req, res) => {
  const user = await authService.register(req.body);

  return successResponse(res, 201, user);
};
