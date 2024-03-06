import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true // Trim whitespace from the beginning and end of the username
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Convert email to lowercase to ensure uniqueness
        trim: true // Trim whitespace from the beginning and end of the email
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Ensure password is at least 6 characters long
        select: false // Do not include the password in query results by default
    },
    createdAt: {
        type: Date,
        default: Date.now // Set the default value to the current timestamp
    },
    updatedAt: {
        type: Date,
        default: Date.now // Set the default value to the current timestamp
    }
});

// Update updatedAt timestamp before saving the document
userSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

const User = mongoose.model('User', userSchema);

export default User;
