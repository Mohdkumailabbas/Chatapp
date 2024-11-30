import express from "express";
import { getMe, login, logout, signup } from "../controllers/authController.js";
import { protectedRoute } from "../middleware/protectedRoute.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", protectedRoute, getMe);
export default router;
//# sourceMappingURL=authRoute.js.map