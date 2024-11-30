import express from "express";
import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRout.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cookieParser());
// Middleware to parse JSON
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.listen(3000, () => {
    console.log("Server is Running on http://localhost:3000");
});
//# sourceMappingURL=index.js.map