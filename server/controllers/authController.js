const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });
};

// Register (Customer Only)
exports.register = async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and password",
      });
    }

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email already in use",
      });
    }

    // Create user (Always as customer)
    user = await User.create({
      name,
      email,
      password,
      avatar: avatar || "https://i.pravatar.cc/68?img=1",
      role: "customer",
    });

    // Create token
    const token = generateToken(user._id, user.role);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email and password",
      });
    }

    // Check for user
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check if password matches
    let isMatch = false;
    try {
      isMatch = await user.matchPassword(password);
    } catch (passwordErr) {
      console.error("Password match error:", passwordErr);
      return res.status(500).json({
        success: false,
        message: "Authentication error",
      });
    }
    
    if (!isMatch) {
      console.log(`Login failed for ${email} - password mismatch`);
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Prevent admin from logging in as customer
    if (user.role === "designer" && email === "admin@roomio.com") {
      // Admin can only log in as designer, not customer
      // This is an admin user, allow designer login only
    } else if (user.role === "designer") {
      // Non-admin designer users cannot log in
      return res.status(403).json({
        success: false,
        message: "Designer access is restricted to administrators only",
      });
    }

    // Create token
    const token = generateToken(user._id, user.role);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get current user
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
