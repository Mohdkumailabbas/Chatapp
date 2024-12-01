import express from "express";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/messageController.js";
import { protectedRoute } from "../middleware/protectedRoute.js";

const router =express.Router();

router.get("/conversations",protectedRoute,getUsersForSidebar)//shifted above due to dynmaic route
router.post("/send/:id",protectedRoute,sendMessage);
router.get("/:id",protectedRoute,getMessages);
export default router