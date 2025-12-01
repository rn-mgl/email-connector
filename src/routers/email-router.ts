import { handleEmail } from "@/controllers/email-controller";
import express from "express";

const router = express.Router();

router.post("/", handleEmail);

export default router;
