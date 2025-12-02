import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import emailRouter from "./routers/email-router.js";
import { errorHandler } from "./middlewares/error-middleware.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: "*" }));

app.use("/email", emailRouter);

app.use(errorHandler);

export default app;
