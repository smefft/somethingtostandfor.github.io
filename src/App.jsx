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
    </div>
  );
}
