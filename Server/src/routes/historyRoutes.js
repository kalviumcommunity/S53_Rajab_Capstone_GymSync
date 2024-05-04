import express from "express"
import { getHistory, saveWorkout } from "../controllers/historyController.js";
import protectRoute from "../middleware/protectRoute.js";
saveWorkout
const historyRoutes = express.Router()
historyRoutes.post('/save',protectRoute, saveWorkout );
historyRoutes.get("/historydata/:userId",protectRoute, getHistory)
export default historyRoutes
