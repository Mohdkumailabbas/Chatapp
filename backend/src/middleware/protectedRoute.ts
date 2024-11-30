import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../db/prisma.js";
interface decodedToken extends JwtPayload {
    userId: string
}
declare global{ // Extending the global TypeScript namespace
    //A namespace is like a folder that helps group related code, just like how you organize things in a room or in a library. It keeps things organized and avoids clutter.
    namespace Express{// Extending the Request interface from Express
        export interface Request{// Adding a custom 'user' property to the Request object
		// 'user' will store user-related information, like their ID
            user:{
                id:string;
            }
        }
    }
}
export const protectedRoute = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY!) as decodedToken
        if (!decodedToken) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }
        const user = await prisma.user.findUnique({
            where: { id: decodedToken.userId },
            select: { id: true, username: true, fullname: true, profilePic: true }

        })
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        req.user = user;

        next();
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}