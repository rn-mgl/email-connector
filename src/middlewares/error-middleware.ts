import type {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";

export const errorHandler = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message: string = "An error occurred";

  if ("message" in err && typeof err.message === "string") {
    message = err.message;
  }

  res.status(500).json({ message });
};
