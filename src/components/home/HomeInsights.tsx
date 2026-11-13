import NextLink from "next/link";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import type { Post } from "@/lib/content-types";
import { formatDate } from "@/lib/content";

function ArticleEntry({ post, featured = false }: { post: Post; featured?: boolean }) {
  return <NextLink className={`home-article${featured ? " home-article--featured" : ""}`} href={`/insights/${post.slug}`}>
    <Text as="h3" variant={featured ? "heading-1" : "heading-3"}>{post.title}</Text>
    <Text variant={featured ? "lead" : "body"} muted>{post.excerpt}</Text>
    <Text variant="caption" muted><time dateTime={post.date}>{formatDate(post.date)}</time></Text>
  </NextLink>;
}

export function HomeInsights({ posts }: { posts: Post[] }) {
  const [featured, ...quiet] = posts;
  if (!featured) return null;
  return <section className="home-notes" aria-labelledby="insights-heading" id="insights">
    <div className="site-container">
      <header className="home-notes-head">
        <Text as="h2" variant="heading-2" id="insights-heading">Insights</Text>
        <Link href="/insights">See all insights</Link>
      </header>
      <div className="home-notes-content">
        <ArticleEntry post={featured} featured />
        {quiet.length ? <div className="home-notes-quiet">{quiet.map(post => <ArticleEntry key={post.slug} post={post} />)}</div> : null}
      </div>
    </div>
  </section>;
}
