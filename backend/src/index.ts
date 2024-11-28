import express from "express";

const app = express();
import authRoutes from "./routes/authRoute.js"
import messageRoutes from "./routes/messageRout.js"

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is Running on http://localhost:3000");
});
