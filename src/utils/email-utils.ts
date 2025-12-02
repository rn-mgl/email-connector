import AppError from "../errors/AppError.js";
import type {
  EnvelopeContent,
  TransportConfig,
} from "../interfaces/email-interface.js";

export const getTransportConfig = (): TransportConfig => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new AppError(
      "Missing required email configuration. Please check your environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS"
    );
  }

  return {
    host,
    port: parseInt(port),
    secure: true,
    auth: {
      user,
      pass,
    },
  };
};

export const validateEnvelope = (envelope: unknown): EnvelopeContent => {
  if (typeof envelope !== "object" || envelope === null) {
    throw new AppError(
      `Invalid envelope type. Required is object ${typeof envelope} given.`
    );
  }

  if (
    !("to" in envelope) ||
    !("subject" in envelope) ||
    !("source" in envelope) ||
    !("body" in envelope)
  ) {
    throw new AppError(
      `Invalid parameters given. Ensure 'to', 'source', 'subject', 'body' are set.`
    );
  }

  const to = envelope?.to;
  const source = envelope?.source;
  const subject = envelope?.subject;
  const body = envelope?.body;

  if (
    typeof to !== "string" ||
    (Array.isArray(to) &&
      to.every((recipient) => typeof recipient === "string"))
  ) {
    throw new AppError(
      `Invalid parameters given. Ensure 'to' is a string or an array of strings.`
    );
  }

  if (typeof subject !== "string") {
    throw new AppError(
      `Invalid parameters given. Ensure 'subject' is a string.`
    );
  }

  if (typeof body !== "string") {
    throw new AppError(`Invalid parameters given. Ensure 'body' is a string.`);
  }

  if (typeof source !== "string") {
    throw new AppError(
      `Invalid parameters given. Ensure 'source' is a string.`
    );
  }

  const sources = process.env.ALLOWED_SOURCES?.split(",");

  if (!sources?.includes(source)) {
    throw new AppError(`Invalid source given.`);
  }

  return {
    to,
    subject,
    body,
    from: "no-reply@rltn.space",
  };
};
