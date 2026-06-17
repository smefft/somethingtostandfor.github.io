import { useState } from "react";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";
import SubmitPage from "./pages/SubmitPage";
import PostPage from "./pages/PostPage";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("blog");
  const [selectedPost, setSelectedPost] = useState(null);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    setSelectedPost(data);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main>
        {currentPage === "blog" && <BlogPage navigate={navigate} />}
        {currentPage === "submit" && <SubmitPage navigate={navigate} />}
        {currentPage === "post" && <PostPage post={selectedPost} navigate={navigate} />}
      </main>
      <div style={{ maxWidth: "60%", fontSize: "0.6em", margin: "0 auto", padding: "2rem 1.5rem", textAlign: "center" }}>The emoji graphics are from the open source project Twemoji: (https://twemoji.twitter.com/). The graphics are copyright 2020 Twitter, Inc and other contributors. The graphics are licensed under CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You should review the license before usage in your project.</div>
    </div >
  );
}
