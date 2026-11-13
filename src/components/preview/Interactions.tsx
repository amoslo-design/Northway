"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { IconButton } from "@/components/atoms/IconButton";
import { Input } from "@/components/atoms/Input";
import { Select } from "@/components/atoms/Select";
import { Tag } from "@/components/atoms/Tag";
import { Textarea } from "@/components/atoms/Textarea";
import { Text } from "@/components/atoms/Text";
import { Field } from "@/components/molecules/Field";

export function LoadingExample() {
  const [loading, setLoading] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current); }, []);
  return <div className="specimen-block">
    <Button variant="secondary" loading={loading} onClick={() => {
      setLoading(true);
      timeout.current = setTimeout(() => setLoading(false), 1200);
    }}>Preview loading</Button>
    <span className="sr-only" role="status">{loading ? "Loading preview." : ""}</span>
  </div>;
}

export function TagExamples() {
  const [selected, setSelected] = useState("All");
  return <div className="specimen-row" role="group" aria-label="Preview sector filters">
    {["All", "Health", "Consulting", "Hospitality"].map(label => <Tag key={label} label={label} interactive selected={selected === label} onClick={() => setSelected(label)} />)}
    <Tag label="Unavailable" interactive disabled />
  </div>;
}

export function IconButtonExamples() {
  const [pressed, setPressed] = useState(false);
  return <div className="specimen-row">
    <IconButton label={pressed ? "Close" : "Menu"} icon={pressed ? "close" : "menu"} pressed={pressed} onClick={() => setPressed(value => !value)} />
    <IconButton label="Previous example" icon="prev" disabled />
    <Text variant="caption" muted>Toggle the icon to preview its pressed state.</Text>
  </div>;
}

const services = [
  { value: "", label: "Not sure yet" },
  { value: "position", label: "Position" },
  { value: "grow", label: "Grow" },
  { value: "brand", label: "Brand + growth" },
];

export function FieldExamples() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function validate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = Boolean(email) && Boolean(inputRef.current?.validity.valid);
    setError(valid ? "" : "Enter a valid email address.");
    setValidated(valid);
    if (!valid) inputRef.current?.focus();
  }

  return <div className="field-examples">
    <Text muted>Real labels, native controls and feedback that explains the next step.</Text>
    <Field label="Name" id="preview-name">
      {props => <Input {...props} name="name" autoComplete="name" minLength={2} maxLength={80} />}
    </Field>
    <form noValidate onSubmit={validate} className="specimen-block" aria-label="Email validation preview">
      <Field label="Email" id="preview-email" error={error}>
        {props => <Input {...props} ref={inputRef} name="email" type="email" autoComplete="email" required value={email} onChange={event => { setEmail(event.target.value); setValidated(false); }} />}
      </Field>
      <div className="specimen-row"><Button type="submit" variant="secondary">Check email</Button><Text variant="caption" muted>Preview only. No message is sent.</Text></div>
      <div role="status">{validated ? <p className="preview-feedback"><Icon name="success" />Email format looks right.</p> : null}</div>
    </form>
    <Field label="Service" id="preview-service">
      {props => <Select {...props} name="service" options={services} defaultValue="" />}
    </Field>
    <Field label="Message" id="preview-message" optional helper="Tell us the goal and anything we should know about timing. Up to 1,000 characters.">
      {props => <Textarea {...props} name="message" maxLength={1000} />}
    </Field>
    <Field label="Email, filled" id="preview-filled">
      {props => <Input {...props} type="email" defaultValue="hello@northway.example" />}
    </Field>
    <Field label="Email, error" id="preview-invalid" error="Enter a valid email address.">
      {props => <Input {...props} type="email" defaultValue="hello@" />}
    </Field>
    <Field label="Email, disabled" id="preview-disabled">
      {props => <Input {...props} type="email" disabled />}
    </Field>
  </div>;
}
