import NextLink from "next/link";
import { Text } from "@/components/atoms/Text";
import { formatDate } from "@/lib/content";
import type { Post } from "@/lib/content-types";

export function PostCard({ post }: { post: Post }) {
  return <NextLink href={`/insights/${post.slug}`} className="post-card">
    <Text as="time" dateTime={post.date} variant="caption" muted>{formatDate(post.date)}</Text>
    <div className="post-copy"><Text as="h3" variant="heading-3">{post.title}</Text><Text muted>{post.excerpt}</Text></div>
  </NextLink>;
}
