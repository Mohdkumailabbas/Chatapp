import jwt from "jsonwebtoken";
import prisma from "../db/prisma.js";
export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        if (!decodedToken) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }
        const user = await prisma.user.findUnique({
            where: { id: decodedToken.userId },
            select: { id: true, username: true, fullname: true, profilePic: true }
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
//# sourceMappingURL=protectedRoute.js.map