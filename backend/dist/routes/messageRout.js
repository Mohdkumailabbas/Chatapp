import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import { protectedRoute } from "../middleware/protectedRoute.js";
const router = express.Router();
router.post("/send/:id", protectedRoute, sendMessage);
export default router;
//# sourceMappingURL=messageRout.js.map