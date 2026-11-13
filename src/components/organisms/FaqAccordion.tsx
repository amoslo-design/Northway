"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
import type { Faq } from "@/lib/content-types";

function FaqItem({ item }: { item: Faq }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return <div className="faq-item">
    <h3><button className="faq-trigger" id={`${id}-trigger`} aria-expanded={open} aria-controls={`${id}-panel`} onClick={() => setOpen(value => !value)}><span className="faq-question"><span>{item.question}</span></span><Icon name={open ? "minus" : "plus"} /></button></h3>
    <div id={`${id}-panel`} hidden={!open} role="region" aria-labelledby={`${id}-trigger`} className="faq-panel"><Text>{item.answer}</Text></div>
  </div>;
}

export function FaqAccordion({ items }: { items: Faq[] }) {
  if (!items.length) return null;
  return <div className="faq-list">{items.map(item => <FaqItem key={item.question} item={item} />)}</div>;
}
