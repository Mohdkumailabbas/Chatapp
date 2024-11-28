import express from "express";
import { login, logout, signup } from "../controllers/authController.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/signup", logout);
export default router;
//# sourceMappingURL=authRoute.js.map