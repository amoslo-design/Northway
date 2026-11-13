"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Select } from "@/components/atoms/Select";
import { Textarea } from "@/components/atoms/Textarea";
import { Text } from "@/components/atoms/Text";
import { Link } from "@/components/atoms/Link";
import { Field } from "@/components/molecules/Field";

type Props = { services: { title: string; slug: string }[]; defaultService: string; email: string; replyTime: string };

export function EnquiryForm({ services, defaultService, email, replyTime }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const summary = useRef<HTMLDivElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const address = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "");
    const service = String(data.get("service") || "not-sure");
    const nextErrors: Record<string, string> = {};
    if (name.length < 2 || name.length > 80) nextErrors.name = "Enter your name using 2 to 80 characters.";
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (!address || !emailInput.validity.valid) nextErrors.email = "Enter a valid email address.";
    if (message.length > 1000) nextErrors.message = "Keep your message to 1,000 characters or fewer.";
    if (!["not-sure", ...services.map(item => item.slug)].includes(service)) nextErrors.service = "Choose a service, or select Not sure yet.";
    setErrors(nextErrors); setFailed(false);
    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    setSending(true);
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email: address, service, message, website: String(data.get("website") || "") }) });
      if (!response.ok) throw new Error("Delivery not confirmed");
      setSuccess(true);
    } catch {
      setFailed(true);
      requestAnimationFrame(() => summary.current?.focus());
    } finally { setSending(false); }
  }

  return <div className="enquiry"><div role="status" aria-live="polite">{success ? <div className="stack"><Text as="h2" variant="heading-2">Thanks, {replyTime.charAt(0).toLowerCase() + replyTime.slice(1)}</Text></div> : null}</div>
    {!success ? <form className="stack enquiry" noValidate onSubmit={submit}>
      {Object.keys(errors).length || failed ? <div ref={summary} tabIndex={-1} className="enquiry-error" role="alert">{failed ? <>We couldn&apos;t confirm your message was sent. Try again, or <Link href={`mailto:${email}`}>email us directly</Link>.</> : <><Text>Check the highlighted fields and try again.</Text><ul>{Object.entries(errors).map(([key, value]) => <li key={key}><Link href={`#contact-${key}`}>{value}</Link></li>)}</ul></>}</div> : null}
      <Field id="contact-name" label="Name" error={errors.name}>{props => <Input {...props} name="name" required minLength={2} maxLength={80} autoComplete="name" />}</Field>
      <Field id="contact-email" label="Email" error={errors.email}>{props => <Input {...props} name="email" type="email" required autoComplete="email" />}</Field>
      <Field id="contact-service" label="Service" error={errors.service}>{props => <Select {...props} name="service" defaultValue={defaultService} options={[...services.map(item => ({ label: item.title, value: item.slug })), { label: "Not sure yet", value: "not-sure" }]} required />}</Field>
      <Field id="contact-message" label="Message" optional error={errors.message} helper="Tell us the goal and anything we should know about timing. Up to 1,000 characters.">{props => <Textarea {...props} name="message" maxLength={1000} />}</Field>
      <div hidden><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <span data-primary-action><Button type="submit" size="lg" loading={sending}>Send the brief</Button></span><span className="sr-only" role="status">{sending ? "Sending your message." : ""}</span>
    </form> : null}
  </div>;
}
