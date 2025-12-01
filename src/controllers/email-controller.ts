import { getTransporter } from "@/services/email-service.ts";
import { validateEnvelope } from "@/utils/email-utils.ts";
import { response, type Request, type Response } from "express";

export const handleEmail = async (req: Request, res: Response) => {
  const { envelope } = req.body;

  const details = validateEnvelope(envelope);

  const transporter = getTransporter();

  const email = await transporter.sendMail(details);

  return res.json({
    response: email.response,
    accepted: email.accepted,
    rejected: email.rejected,
  });
};
