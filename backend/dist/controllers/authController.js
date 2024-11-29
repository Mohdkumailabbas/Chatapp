import { userSchema } from "../schema/userSchema.js";
import prisma from "../db/prisma.js";
import bcryptjs from "bcryptjs";
import { genrateToken } from "../utils/genrateToken.js";
export const signup = async (req, res) => {
    try {
        // Validate request body using Zod
        const result = userSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ errors: result.error.errors });
        }
        const { fullname, username, password, confirmPassword, gender } = result.data;
        // Ensure username is unique
        const existingUser = await prisma.user.findUnique({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ error: "Username already taken" });
        }
        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        // Generate profile picture URL
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const profilePic = gender === "male" ? boyProfilePic : girlProfilePic;
        // Create user in database
        const newUser = await prisma.user.create({
            data: {
                fullname,
                username,
                password: hashedPassword,
                gender,
                profilePic,
            },
        });
        // Generate token and send response
        if (newUser) {
            genrateToken(newUser.id, res);
            res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        }
        else {
            res.status(400).json({ error: "Invalid user data" });
        }
    }
    catch (error) {
        console.error("Signup error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const login = () => { };
export const logout = () => { };
//# sourceMappingURL=authController.js.map