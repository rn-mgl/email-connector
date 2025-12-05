import { getTransportConfig } from "@/utils/email-utils.js";
import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | null = null;

export const getTransporter = () => {
  if (!transporter) {
    const emailConfig = getTransportConfig();
    transporter = nodemailer.createTransport(emailConfig);
  }

  return transporter;
};
