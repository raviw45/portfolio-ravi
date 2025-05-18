"use client";

import React, { useState } from "react";
import Button from "../common/button";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/config/framer";
import { useSendMail } from "@/utils/useSendMail";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    subject: "",
    description: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      await sendMail(formData);
      setSubmitted(true);
      setFormData({ fullName: "", subject: "", description: "" });

      // Optionally hide the message after some time:
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="md:py-24 py-8 overflow-hidden scroll-mt-20"
    >
      <div className="w-[95%] md:w-[85%] mx-auto grid md:grid-cols-2 gap-4 items-center">
        {/* Left Info Section */}
        <motion.div
          className="text-center md:text-left space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0}
        >
          <h2 className="text-3xl sm:text-4xl font-bold  mb-8 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Let&apos;s Connect!
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I&apos;m always excited to hear from you. Whether you have a
            question, a project idea, or just want to say hi, feel free to reach
            out by filling the form.
          </p>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:ravikantwaghmare82@gmail.com"
                className="text-indigo-600 dark:text-indigo-400 underline"
              >
                ravikantwaghmare82@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919527142826" className="underline">
                +91 95271 42826
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ravikant-waghmare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline"
              >
                linkedin.com/in/ravikant-waghmare
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={1}
          className="relative"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md border border-green-500 text-center relative">
                <button
                  onClick={() => setSubmitted(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                  aria-label="Close"
                >
                  &times;
                </button>
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Thank you for reaching out. I&apos;ll get back to you soon!
                </p>
              </div>
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700"
            noValidate
          >
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Subject of your message"
              />
              {errors.subject && (
                <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Write your message here..."
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.description}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md py-3 transition-colors"
            >
              {loading ? "Sending..." : " Send Message"}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
