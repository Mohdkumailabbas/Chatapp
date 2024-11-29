import { z } from "zod";
export const userSchema = z.object({
    fullname: z.string().min(1, "Fullname is required"),
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
    gender: z.enum(["male", "female"], { errorMap: () => ({ message: "Choose a valid gender" }) }),
})
    .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"] // Error will be attached to the confirmpassword field
});
//# sourceMappingURL=userSchema.js.map