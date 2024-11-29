import jwt from "jsonwebtoken";
export const genrateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn: "15d",
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds 
        httpOnly: true, // Prevents JavaScript access to the cookie (e.g., via document.cookie).
        sameSite: "strict", // Restricts cookie to same-site requests
        secure: process.env.NODE_ENV !== "development" // Only send the cookie over HTTPS in non-development environments
    });
    return token;
};
//# sourceMappingURL=genrateToken.js.map