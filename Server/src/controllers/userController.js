import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateTokenandSetCookie.js";
const getUserProfile = async (req, res) => {
  const { query } = req.params;
  try {
    let user;
    //query is userid
    if (mongoose.Types.ObjectId.isValid(query)) {
      user = await User.findOne({ _id: query })
        .select("-password")
        .select("-updatedAt");
    } // query is username
    else {
      user = await User.findOne({ username: query })
        .select("-password")
        .select("-updatedAt");
    }
    if (!user) {
      console.log("User not Found");
      res.status(404).json({ error: "User not Found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log("Error in getting User Profile:", error.message);
  }
};
const signupUser = async (req, res) => {
  try {
    const { name, email, username, password, nickname, height, weight, BMI } =
      req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res.status(400).json({ error: "User already Exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
      nickname,
      height,
      weight,
      BMI,
    });
    await newUser.save();
    if (newUser) {
      generateTokenandSetCookie(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        nickname: newUser.nickname,
        height: newUser.height,
        weight: newUser.weight,
        BMI: newUser.BMI,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("Error in Signup User: ", error.message);
  }
};
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect)
      return res.status(400).json({ error: "Invalid Username or Password" });
    generateTokenandSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      nickname: user.nickname,
      height: user.height,
      weight: user.weight,
      BMI: user.BMI,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in Login User:", error.message);
  }
};
const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User LoggedOut Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in login User:", error.message);
  }
};

export { getUserProfile, loginUser, logoutUser, signupUser };
