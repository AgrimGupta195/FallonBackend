const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/userModel");

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return token;
};

exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (!admin || !bcrypt.compareSync(password, admin.password)) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        console.log();
        generateToken(admin._id, res);
        res.json({ message: "Logged in successfully", user: { id: admin._id, email: admin.email } });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
exports.logoutAdmin = (req, res) => {
    res.clearCookie("jwt", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "None"
    });

    res.json({ message: "Logout successful" });
};

exports.checkAuth = (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        res.status(200).json(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
