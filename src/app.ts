import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import emailRouter from "@/routers/email-router.ts";
import { errorHandler } from "@/middlewares/error-middleware.ts";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/email", emailRouter);

app.use(errorHandler);

export default app;
