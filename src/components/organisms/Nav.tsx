"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "@/components/atoms/IconButton";
import { Icon } from "@/components/atoms/Icon";
import { Waymark } from "@/components/atoms/Waymark";

export type NavLink = { label: string; href: string };
type NavProps = { studioName: string; ctaLabel: string; links: NavLink[] };

export function Nav({ studioName, ctaLabel, links }: NavProps) {
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [onPine, setOnPine] = useState(pathname === "/");

  useEffect(() => {
    const band = document.querySelector("[data-briefing]");
    const bandObserver = new IntersectionObserver(entries => setOnPine(Boolean(entries[0]?.isIntersecting)), { rootMargin: `-${header.current?.offsetHeight || 0}px 0px 0px 0px` });
    if (band) bandObserver.observe(band);
    if (!band) setOnPine(false);
    return () => bandObserver.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const breakpoint = window.matchMedia("(min-width: 1024px)");
    function closeOnDesktop(event: MediaQueryListEvent) { if (event.matches) dialog.current?.close(); }
    breakpoint.addEventListener("change", closeOnDesktop);
    return () => { document.body.style.overflow = previous; breakpoint.removeEventListener("change", closeOnDesktop); };
  }, [open]);

  function close() { dialog.current?.close(); }
  function isCurrent(href: string) { return pathname === href || pathname.startsWith(`${href}/`); }

  return <header ref={header} className="site-header" data-pine={onPine}>
    <div className="site-container nav-inner">
      <NextLink className="wordmark" href="/" aria-label={`${studioName}, home`}><Waymark size="wordmark" />{studioName}</NextLink>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(link => <NextLink key={link.href} className="nav-link" href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}>{link.label}</NextLink>)}
      </nav>
      <div className="desktop-cta"><NextLink href="/contact" className="nav-enquiry" data-primary={false}>{ctaLabel}</NextLink></div>
      <button ref={trigger} className="icon-button mobile-menu-trigger" aria-label="Menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><Icon name="menu" /></button>
    </div>
    <dialog ref={dialog} className="mobile-nav-dialog" id="mobile-navigation" aria-label="Main navigation" onClose={() => { setOpen(false); trigger.current?.focus(); }} onKeyDown={event => {
      if (event.key !== "Tab") return;
      const items = event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]');
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === event.currentTarget)) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
      <div className="mobile-nav-head"><span className="wordmark"><Waymark size="wordmark" />{studioName}</span><IconButton icon="close" label="Close" onClick={close} /></div>
      <nav className="mobile-nav-links" aria-label="Mobile navigation">{links.map(link => <NextLink key={link.href} href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined} onClick={close}>{link.label}</NextLink>)}</nav>
      <div className="mobile-nav-cta"><NextLink className="nav-enquiry" href="/contact" onClick={close}>{ctaLabel}</NextLink></div>
    </dialog>
  </header>;
}
