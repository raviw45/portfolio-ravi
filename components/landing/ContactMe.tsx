"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useSendMail } from "@/utils/useSendMail";
import Reveal from "./Reveal";

const inputClass =
  "px-[13px] py-[11px] rounded-lg border text-[14.5px] font-inherit bg-[var(--pg-bg)] text-[var(--pg-text)] border-[var(--pg-line)] focus:outline-none focus:border-[var(--pg-accent)]";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: "", subject: "", description: "" });
  const [errors, setErrors] = useState({ fullName: "", subject: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const { sendMail, loading, error } = useSendMail();

  const validate = () => {
    const newErrors = { fullName: "", subject: "", description: "" };
    let valid = true;
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await sendMail(formData);
    setSubmitted(true);
    setFormData({ fullName: "", subject: "", description: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="px-[22px] pb-24">
      <div
        className="max-w-[1180px] mx-auto relative overflow-hidden rounded-[18px] border"
        style={{
          borderColor: "var(--pg-line)",
          background: "linear-gradient(160deg,var(--pg-surface-2),var(--pg-bg2))",
          padding: "clamp(26px,4vw,46px)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute -top-36 -left-[90px] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,var(--pg-glow),transparent 70%)", filter: "blur(24px)" }}
        />
        <div className="grid md:grid-cols-2 gap-11 relative">
          <div>
            <Reveal>
              <h2
                className="font-semibold tracking-[-0.025em] mb-3"
                style={{ fontSize: "clamp(26px,3.4vw,36px)" }}
              >
                Let&apos;s build something worth shipping.
              </h2>
            </Reveal>
            <Reveal className="text-base leading-[1.65] mb-6 max-w-[46ch] text-[var(--pg-muted)]">
              Open to full stack and AI engineering roles, and to freelance work. The fastest
              route is email — I reply within a day.
            </Reveal>
            <Reveal className="flex flex-col gap-3 text-[15px]">
              <a
                href="mailto:ravikantwaghmare82@gmail.com"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--pg-accent)] text-[var(--pg-text)]"
              >
                <span className="flex text-[var(--pg-accent)]">
                  <Mail size={18} />
                </span>
                ravikantwaghmare82@gmail.com
              </a>
              <a
                href="tel:+919527142826"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--pg-accent)] text-[var(--pg-text)]"
              >
                <span className="flex text-[var(--pg-accent)]">
                  <Phone size={18} />
                </span>
                +91 95271 42826
              </a>
              <span className="inline-flex items-center gap-2.5 text-[var(--pg-muted)]">
                <span className="flex text-[var(--pg-accent)]">
                  <MapPin size={18} />
                </span>
                Hadapsar, Pune, Maharashtra 412307
              </span>
            </Reveal>
          </div>

          <Reveal>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <label className="flex flex-col gap-1.5 text-[13px] text-[var(--pg-muted)]">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.fullName && <span className="text-red-400 text-xs">{errors.fullName}</span>}
              </label>
              <label className="flex flex-col gap-1.5 text-[13px] text-[var(--pg-muted)]">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass}
                />
                {errors.subject && <span className="text-red-400 text-xs">{errors.subject}</span>}
              </label>
              <label className="flex flex-col gap-1.5 text-[13px] text-[var(--pg-muted)]">
                Message
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="What are you building?"
                  className={`${inputClass} resize-y`}
                />
                {errors.description && <span className="text-red-400 text-xs">{errors.description}</span>}
              </label>
              <button
                type="submit"
                disabled={loading}
                className="mt-1 px-5 py-3 rounded-lg border font-medium text-[14.5px] transition-colors hover:bg-[var(--pg-accent-soft)] disabled:opacity-60"
                style={{ borderColor: "var(--pg-accent)", color: "var(--pg-accent)", background: "transparent" }}
              >
                {loading ? "Sending…" : submitted ? "Message sent ✓" : "Send message"}
              </button>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {submitted && (
                <div className="text-[13.5px]" style={{ color: "#4ec98a" }}>
                  Thanks — your message is on its way. I&apos;ll reply to your inbox shortly.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
