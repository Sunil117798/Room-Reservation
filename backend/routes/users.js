import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
  getUsers,
} from "../controller/User.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user your are logged in ");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user your are logged in now you can delete this account ");
// });
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin your are logged in now you can delete all account");
// });
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

export default router;
