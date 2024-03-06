import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!email || !password || !username) {
        return res.status(400).json({ message: "Please provide username, email, and password." });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            next(errorHandler(400, 'User already exists with that email.'));
        }

        // Hash the password before saving the user
        const salt = await bcrypt.genSalt(10); // 10 rounds is generally considered a good balance
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword // Save the hashed password
        });

        await newUser.save();
        
        // Consider what user information to send back. Exclude sensitive data like password.
        res.status(201).json({
            message: "Signup successful",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });

    } catch (error) {
        console.error(error);
        next(error);
    }
};
