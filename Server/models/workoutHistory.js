import mongoose from "mongoose";
const workoutHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  workoutName: {
    type: String,
    ref: "Workout",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  sets: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
});
const History = mongoose.model("Workout History", workoutHistorySchema);
export default History;
