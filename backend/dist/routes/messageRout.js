import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import { protectedRoute } from "../middleware/protectedRoute.js";
const router = express.Router();
router.post("/send/:id", protectedRoute, sendMessage);
router.get("/:id", protectedRoute, getMessages);
export default router;
//# sourceMappingURL=messageRout.js.map