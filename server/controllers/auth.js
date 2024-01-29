import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

// SIGNUP
export const signup = async (req, res, next) => {
  try {
    const {
      userName,
      email,
      password,
      // picturePath,
      // friends,
      // location,
      // occupation,
    } = req.body;

<<<<<<< HEAD
    console.log(userName, email, password);
=======
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User exist!" });
    }
>>>>>>> 46a61c469eb841b363a2133e82ff6b091aea1db5

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: passwordHash,
      // picturePath,
      // friends,
      // location,
      // occupation,
      // viewedProfile: Math.floor(Math.random() * 10000),
      // impressions: Math.floor(Math.random() * 10000),
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

    const token = jwt.sign(
      {
        userId: user._id,
        userName: user.userName,
        userPicturePath: user.userPicturePath,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    delete user._doc.password;

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
