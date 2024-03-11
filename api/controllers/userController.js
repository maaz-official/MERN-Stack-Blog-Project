import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
    res.json({"message": "Hello World!"});
};

export const updateUser = async (req, res, next) => {
    
    // if (req.user.id !== req.params.userId) {
    //     return next(errorHandler(403, 'You are not allowed to update this user'));
    // }

    try {
        let updateFields = {};

        if (req.body.password) {
            if (req.body.password.length < 6) {
                return next(errorHandler(400, 'Password must be at least 6 characters'));
            }
            updateFields.password = bcrypt.hashSync(req.body.password, 10);
        }

        if (req.body.username) {
            if (req.body.username.length < 7 || req.body.username.length > 20) {
                return next(errorHandler(400, 'Username must be between 7 and 20 characters'));
            }
            if (req.body.username.includes(' ')) {
                return next(errorHandler(400, 'Username cannot contain spaces'));
            }
            if (req.body.username !== req.body.username.toLowerCase()) {
                return next(errorHandler(400, 'Username must be lowercase'));
            }
            if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
                return next(errorHandler(400, 'Username can only contain letters and numbers'));
            }

            updateFields.username = req.body.username;
        }

        if (req.body.email) {
            updateFields.email = req.body.email;
        }

        if (req.body.profilePicture) {
            updateFields.profilePicture = req.body.profilePicture;
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.userId, updateFields, { new: true });

        if (!updatedUser) {
            return next(errorHandler(404, 'User not found'));
        }

        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};
