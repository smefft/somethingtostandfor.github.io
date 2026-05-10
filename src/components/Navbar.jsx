export default function Navbar({ currentPage, navigate }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand" onClick={() => navigate("blog")}>
          <h1 className="site-title">Something To Stand For</h1>
          <p className="site-tagline">a communal blog</p>
        </div>
        <nav className="navbar-links">
          <button
            className={`nav-link ${currentPage === "blog" ? "active" : ""}`}
            onClick={() => navigate("blog")}
          >
            Blog
          </button>
          <button
            className={`nav-link nav-link-cta ${currentPage === "submit" ? "active" : ""}`}
            onClick={() => navigate("submit")}
          >
            Submit entry
          </button>
        </nav>
      </div>
    </header>
  );
}
