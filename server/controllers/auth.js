import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

// SIGNUP
export const signup = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User exist!" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: passwordHash,
    });
    await newUser.save();
    res.status(200).json({ message: "Signup successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup unsuccessful!" });
    next(err);
  }
};

/* SIGNIN */
export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    delete user._doc.password;

    const token = jwt.sign({ ...user._doc }, process.env.JWT_SECRET_KEY, {
      expiresIn: "12h",
    });

    res.status(200).json({
      user: { ...user._doc, token },
      message: "Signin successful!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signin unsuccessful!" });
    next(err);
  }
};
