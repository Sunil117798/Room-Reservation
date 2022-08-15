import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  updateHotel,
  getHotels,
} from "../controller/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/id", getHotel);
router.get("/", getHotels);

export default router;
