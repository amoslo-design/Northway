"use client";

import { useId, type ReactNode } from "react";
import { Icon } from "@/components/atoms/Icon";

type ControlProps = { id: string; "aria-describedby"?: string; "aria-invalid"?: true };
type FieldProps = {
  id?: string;
  label: string;
  helper?: string;
  error?: string;
  optional?: boolean;
  children: (props: ControlProps) => ReactNode;
};

export function Field({ id, label, helper, error, optional, children }: FieldProps) {
  const generatedId = useId();
  const controlId = id || generatedId;
  const helperId = `${controlId}-helper`;
  const errorId = `${controlId}-error`;
  const describedBy = [helper ? helperId : "", error ? errorId : ""].filter(Boolean).join(" ") || undefined;

  return <div className="field">
    <label className="field__label" htmlFor={controlId}>{label}{optional ? <span className="field__optional"> (optional)</span> : null}</label>
    {helper ? <p id={helperId} className="field__help">{helper}</p> : null}
    {children({ id: controlId, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined })}
    {error ? <p id={errorId} className="field__error" role="alert"><Icon name="alert" /><span>{error}</span></p> : null}
  </div>;
}
