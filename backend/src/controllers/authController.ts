
import { Request, Response } from "express";
import { loginSchema, userSchema } from "../schema/userSchema.js";
import prisma from "../db/prisma.js";
import bcryptjs from "bcryptjs";
import { genrateToken } from "../utils/genrateToken.js";
import { error } from "console";

export const signup = async (req: Request, res: Response) => {
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
            })
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.error("Signup error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const login = async (req: Request, res: Response) => {
    try {
        const result = loginSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ errors: result.error.errors });
        }
        const { username, password } = result.data;
        const user=await prisma.user.findUnique({where:{username}});
        if(!user){
             return res.status(400).json({error:"Invalid User"});
        }
        const isPasswordCorrect=await bcryptjs.compare(password,user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({error:"Wrong Password!"})
        }
        genrateToken(user.id,res)
        res.status(200).json({
			id: user.id,
			fullName: user.fullname,
			username: user.username,
			profilePic: user.profilePic,
		});
    } catch (error) {
        console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
};
export const logout =async (req:Request,res:Response) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logout Succesfully!"});
    } catch (error) {
        console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
 };
export const getMe= async(req:Request,res:Response)=>{
    try {
        const user = await prisma.user.findUnique({where:{id:req.user.id}});
        if(!user){
            return res.status(400).json({
                error:"User Not Found"
            })
        }
        res.status(200).json({
            id: user.id,
			fullName: user.fullname,
			username: user.username,
			profilePic: user.profilePic,
        })
    } catch (error) {
     console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });   
    }
}