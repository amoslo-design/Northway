import NextLink from "next/link";
import { Text } from "@/components/atoms/Text";
import { formatDate } from "@/lib/content";
import type { Post } from "@/lib/content-types";

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return <NextLink href={`/insights/${post.slug}`} className="post-card index-entry" data-featured={featured}>
    <div className="index-entry-copy"><Text as="h2" variant={featured ? "heading-1" : "heading-3"}>{post.title}</Text><Text variant={featured ? "lead" : "body"} muted>{post.excerpt}</Text><Text as="time" dateTime={post.date} variant="caption" muted>{formatDate(post.date)}</Text></div>
  </NextLink>;
}
