export interface TransportConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface EnvelopeContent {
  to: string | string[];
  from: string;
  subject: string;
  html: string;
}
