import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function BlogPage({ navigate }) {
  return (
    <div className="blog-page">
      <section className="hero">
        <blockquote className="hero-quote">
          <p>
            "I write entirely to find out what I'm thinking, what I'm looking
            at, what I see and what it means. What I want and what I fear."
          </p>
          <cite>– Joan Didion</cite>
        </blockquote>
      </section>

      <section className="about-section">
        <div className="about-grid">
          <div className="about-col">
            <h2 className="about-heading">W h a t &nbsp; i t &nbsp; i s</h2>
            <ul className="about-list">
              <li>
                A <strong>curated</strong> collection of{" "}
                <strong>opinion</strong> and <strong>reflection</strong> pieces
                by humans from all walks of life
              </li>
              <li>A place to take a stand for what you believe in</li>
              <li>A place to speak your mind</li>
              <li>A place to process, both through reading and writing</li>
            </ul>
          </div>
          <div className="about-col about-col-not">
            <h2 className="about-heading">W h a t &nbsp; i t &nbsp; i s &nbsp; N O T</h2>
            <ul className="about-list">
              <li>a place to complain</li>
              <li>a place to attack</li>
              <li>a news source</li>
              <li>a place for self promotion</li>
              <li>a place to sell stuff</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="posts-section">
        <div className="posts-list">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} navigate={navigate} />
          ))}
        </div>
      </section>
    </div>
  );
}
