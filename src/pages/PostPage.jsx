export default function PostPage({ post, navigate }) {
  if (!post) {
    navigate("blog");
    return null;
  }

  return (
    <div className="post-page">
      <button className="back-btn" onClick={() => navigate("blog")}>
        ← Back to Blog
      </button>
      <article className="post-full">
        <header className="post-header">
          <div className="post-meta">
            <span className="post-author">{post.author}</span>
            <span className="post-divider">·</span>
            <span className="post-date">{post.date}</span>
            <span className="post-divider">·</span>
            <span className="post-read-time">{post.readTime}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </header>
        <div className="post-body">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
