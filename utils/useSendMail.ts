/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface FormData {
  fullName: string;
  subject: string;
  description: string;
}

interface UseSendMailResult {
  sendMail: (data: FormData) => Promise<void>;
  loading: boolean;
  error: string | null;
  response: any;
}

export const useSendMail = (): UseSendMailResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);

  const sendMail = async (formData: FormData) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send email.");
      }

      setResponse(result);
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return { sendMail, loading, error, response };
};
