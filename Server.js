const express = require("express");
const cors = require("cors");
const validator = require("validator");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/sign_up', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters' });
        }

        // Simulate a successful signup without storing data
        res.status(200).json({
            status: 'success',
            message: 'Signup successful (data not stored in database)',
            data: {
                email: email,
                password: password // Note: In a real application, never send the password back to the client
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Route
app.post('/sign_in', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Simulate a successful login
        res.status(200).json({
            status: 'success',
            message: 'Login successful',
            token: 'dummy-token', // Simulated token
            redirectUrl: 'https://career.techforing.com' // Redirect URL
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));