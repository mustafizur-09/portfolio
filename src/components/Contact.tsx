"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Loader2, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Web Development",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

    if (!accessKey) {
      // Friendly reminder for development setup
      setStatus("error");
      setErrorMessage(
        "Web3Forms access key is not configured. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your .env.local file."
      );
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "Web Development",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Network error. Please check your connection and try again."
      );
    }
  };

  const socialPills = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/mustafijur-rahman-6431a7253/",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/mustafizur-09",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8801743885646",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.102.824z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let&apos;s Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-full mb-6 shadow-[0_0_12px_rgba(234,88,12,0.6)]" />
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                Have a project in mind, seeking research collaboration, or looking for a skilled software engineer? Feel free to reach out — I&apos;m always open to discussing new engineering opportunities and innovative ideas.
              </p>
            </div>

            {/* Direct Contact Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-0.5">
                    Email Address
                  </div>
                  <a
                    href="mailto:mustafijurrahman40496@gmail.com"
                    className="text-base sm:text-lg text-white group-hover:text-orange-400 font-medium transition-colors break-all"
                  >
                    mustafijurrahman40496@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-0.5">
                    Location
                  </div>
                  <div className="text-base sm:text-lg text-white font-medium">
                    Rajshahi, Bangladesh
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Available for Remote &amp; Global Opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Active Social Pills */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                Connect on Socials
              </div>
              <div className="flex flex-wrap gap-3">
                {socialPills.map((pill) => (
                  <a
                    key={pill.name}
                    href={pill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-orange-500/50 text-zinc-200 hover:text-white text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <span className="text-orange-400">{pill.icon}</span>
                    <span>{pill.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Glassmorphism Card Holding Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-zinc-900/60 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl border border-zinc-800 hover:border-zinc-700 shadow-2xl shadow-black/50 relative overflow-hidden">
              {/* Subtle top right ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-40" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-zinc-200">
                      Your Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Md. Mustafizur Rahman"
                      className="w-full px-4 py-3.5 bg-zinc-950/70 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-white placeholder-zinc-500 text-sm sm:text-base shadow-inner"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-zinc-200">
                      Your Email <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 bg-zinc-950/70 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-white placeholder-zinc-500 text-sm sm:text-base shadow-inner"
                    />
                  </div>
                </div>

                {/* Subject / Purpose Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-zinc-200">
                    Subject / Purpose <span className="text-orange-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-zinc-950/70 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-white text-sm sm:text-base shadow-inner cursor-pointer"
                  >
                    <option value="Web Development" className="bg-zinc-900 text-white">
                      Web Development
                    </option>
                    <option value="AI/ML Research Collaboration" className="bg-zinc-900 text-white">
                      AI/ML Research Collaboration
                    </option>
                    <option value="SQA Consultation" className="bg-zinc-900 text-white">
                      SQA Consultation
                    </option>
                    <option value="Other" className="bg-zinc-900 text-white">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-zinc-200">
                    Your Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or idea..."
                    className="w-full px-4 py-3.5 bg-zinc-950/70 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-white placeholder-zinc-500 resize-none text-sm sm:text-base shadow-inner"
                  />
                </div>

                {/* Alert Notifications for Success / Error */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-start gap-3 shadow-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Message sent successfully!</div>
                        <div className="text-xs text-emerald-300/80 mt-0.5">
                          Thank you for reaching out. I&apos;ll get back to you soon.
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 flex flex-col gap-2.5 shadow-lg"
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Action Needed: Web3Forms Access Key</div>
                          <div className="text-xs text-red-300/80 mt-0.5 leading-relaxed">
                            {errorMessage}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                        <a
                          href={`mailto:mustafijurrahman40496@gmail.com?subject=${encodeURIComponent(
                            `[Portfolio] ${formData.subject} - from ${formData.name || "Visitor"}`
                          )}&body=${encodeURIComponent(formData.message || "")}`}
                          className="px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
                        >
                          <span>Send via Email Client</span>
                          <span>↗</span>
                        </a>
                        <a
                          href="https://web3forms.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 underline font-medium transition-colors"
                        >
                          Get Free Key at web3forms.com
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 px-8 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-base sm:text-lg font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.98] shadow-[0_0_25px_rgba(234,88,12,0.3)] hover:shadow-[0_0_35px_rgba(234,88,12,0.5)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message ⚡</span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
