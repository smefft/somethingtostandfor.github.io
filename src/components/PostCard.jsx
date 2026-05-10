export default function PostCard({ post, navigate }) {
  return (
    <article className="post-card" onClick={() => navigate("post", post)}>
      <div className="post-card-meta">
        <span className="post-author">{post.author}</span>
        <span className="post-divider">·</span>
        <span className="post-date">{post.date}</span>
        <span className="post-divider">·</span>
        <span className="post-read-time">{post.readTime}</span>
      </div>
      <h2 className="post-card-title">{post.title}</h2>
      {post.content.split("\n\n").map((para, i) => (
        <p key={i} className="post-card-excerpt">{para}</p>
      ))}
      <span className="post-read-more">Read more →</span>
    </article>
  );
}
