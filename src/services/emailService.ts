import emailjs from "@emailjs/browser";

export interface ContactPayload {
  name: string;
  email: string;
  reason: string;
  message: string;
}

const REASON_LABELS: Record<string, string> = {
  hiring: "Hiring",
  collaboration: "Collaboration",
  other: "Other",
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export async function sendContactEmail(data: ContactPayload) {
    await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            name: data.name,
            email: data.email,
            reason: REASON_LABELS[data.reason] ?? data.reason,
            message: data.message,
        },
        { publicKey: PUBLIC_KEY }
    );
}