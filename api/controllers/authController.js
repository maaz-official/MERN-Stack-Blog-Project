import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!email || !password || !username || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'Invalide User havent  filled all fields'));
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
            message: "User created and Signup successful",
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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '') {
        return next(errorHandler(400, 'Invalid credentials. Please provide email and password.'));
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return next(errorHandler(401, 'Invalid credentials. User not found.'));
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return next(errorHandler(401, 'Invalid credentials. Password incorrect.'));
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' } // Token expires in 1 day
        );

        // Set the token in a cookie
        res.cookie('token', token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // Cookie expires in 1 day
            httpOnly: true, // Cookie is accessible only through the HTTP protocol
            secure: process.env.NODE_ENV === 'production' // Set to true in production
        });

        // Send the response
        res.status(200).json({
            message: 'Signin successful',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Route for Google authentication
export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user) {
            // Generate JWT token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
            const newUser = new User({
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                ProfilePicture: googlePhotoUrl,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password, ...rest } = newUser._doc;
            // Respond with success status and JWT token
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }
    } catch (error) {
        // Handle errors
        console.error('Error during Google authentication:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
