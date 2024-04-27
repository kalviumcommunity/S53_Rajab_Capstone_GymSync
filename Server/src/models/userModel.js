import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    followingGymTrainer: {
      type: String,
      default: "",
    },
    height: {
      type: Number,
      default: "",
    },
    weight: {
      type: Number,
      default: "",
    },
    age: {
      type: Number,
      default: "",
    },
    BMI: {
      type: Number,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
export default User;
