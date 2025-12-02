import { handleEmail } from "../controllers/email-controller.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "test" });
});
router.post("/", handleEmail);

export default router;
