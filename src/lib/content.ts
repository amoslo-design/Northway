import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import type { Faq, Post, Project, Service, Settings, TeamMember } from "./content-types";

// JSON front matter is valid YAML, kept deliberately strict for easy file editing.
async function collection<T>(name: string): Promise<T[]> {
  const directory = path.join(process.cwd(), "content", name);
  const files = (await readdir(directory)).filter(file => file.endsWith(".md")).sort();
  return Promise.all(files.map(async file => {
    const source = await readFile(path.join(directory, file), "utf8");
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
    if (!match) throw new Error(`Invalid front matter: ${name}/${file}`);
    return { ...JSON.parse(match[1]), body: match[2].trim() } as T;
  }));
}

export const getContent = cache(async () => {
  const [rawSettings, projects, services, posts, faqs, team] = await Promise.all([
    readFile(path.join(process.cwd(), "content/settings.json"), "utf8"),
    collection<Project>("projects"), collection<Service>("services"), collection<Post>("posts"), collection<Faq>("faqs"), collection<TeamMember>("team"),
  ]);
  const settings = JSON.parse(rawSettings) as Settings;
  return {
    settings,
    team: team.filter(member => member.showOnAbout).sort((a, b) => a.order - b.order),
    projects: projects.sort((a, b) => b.date.localeCompare(a.date)),
    services: services.sort((a, b) => a.order - b.order),
    posts: posts.filter(post => post.published).sort((a, b) => b.date.localeCompare(a.date)),
    faqs: faqs.sort((a, b) => a.order - b.order),
  };
});

export function workText(label: string) { return label.charAt(0).toLowerCase() + label.slice(1); }
export function formatDate(date: string) { return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`)); }
