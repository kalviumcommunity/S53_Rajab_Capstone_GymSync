import mongoose from "mongoose";
const workoutSchema = mongoose.Schema(
  {
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    weight: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("Workout", workoutSchema);
export default User;
