"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/data/navigation";
import { DURATION, EASE } from "@/constants/motion";

const iconMap = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail, instagram: Github };

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (message.length < 10) nextErrors.message = "Message should be at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");
    // NOTE: no backend is wired up yet. Replace this with a real submission —
    // e.g. POST to an /api/contact route that sends via Resend
    // (RESEND_API_KEY is already listed in Deployment_Guide.docx env vars).
    await new Promise((resolve) => setTimeout(resolve, 900));
    setState("success");
  }

  return (
    <Section id="contact">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            description="I'm always interested in discussing new ideas, collaborations, and challenging projects."
            className="mb-10"
          />

          <div className="flex items-center gap-3 text-small text-text-secondary">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan/60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-cyan" />
            </span>
            Available for select projects
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="rounded-card border border-border bg-surface/50 p-6 sm:p-10">
          {state === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.card, ease: EASE.outQuart }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <CheckCircle2 className="mb-4 text-accent-cyan" size={40} />
              <p className="text-card-title font-semibold text-text-primary">Message sent</p>
              <p className="mt-2 max-w-xs text-small text-text-secondary">
                Thanks for reaching out — I&apos;ll reply within a couple of days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-small text-text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-input border border-border bg-bg-primary px-4 py-3 text-small text-text-primary outline-none transition-colors focus:border-accent-blue"
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-caption text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-small text-text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-input border border-border bg-bg-primary px-4 py-3 text-small text-text-primary outline-none transition-colors focus:border-accent-blue"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-caption text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-small text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-input border border-border bg-bg-primary px-4 py-3 text-small text-text-primary outline-none transition-colors focus:border-accent-blue"
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-caption text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={state === "submitting"}>
                {state === "submitting" ? "Sending…" : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
