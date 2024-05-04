import History from "../models/workoutHistory.js";

const saveWorkout = async (req, res) => {
  try {
    const { userId, workoutId, sets, weight, reps } = req.body;
    const newHistory = new History({
      userId,
      workoutId,
      sets,
      weight,
      reps,
    });
    await newHistory.save();
    res.status(200).json({ message: "Workout History Successfully Saved" });
  } catch (error) {
    res.status(500).json({ message: "Error saving workout history" });
  }
};
const getHistory = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("userId: ", userId);

    const history = await History.find({ userId });

    if (!history.length) {
      return res.status(200).json({ message: "No workout history found" });
    }

    res.status(200).json(history);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving workout history" });
  }
};
export { getHistory, saveWorkout };
