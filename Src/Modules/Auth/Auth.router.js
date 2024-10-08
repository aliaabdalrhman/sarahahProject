import { Router } from "express";
import * as authController from './Auth.controller.js'
import validation from "../../Middelware/validation.js";
import { loginSchema, registerSchema } from "./Auth.validation.js";
import { asyncHandler } from "../../Utilities/CatchError.js";

const router = Router();

router.post('/register',asyncHandler(validation(registerSchema)) , asyncHandler(authController.register));
router.post('/login', asyncHandler(validation(loginSchema)), asyncHandler(authController.login));

export default router;