import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  logoutUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect }   from "../middlerware/authMiddleware.js";

// api/users this url will be connected to this whole file so there is no need to put the whole url. we will put things
// just after this url
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
