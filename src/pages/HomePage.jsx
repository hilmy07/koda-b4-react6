import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// Import thumbnails
import thumb1 from "../assets/gpt.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";

//import author
import bakri from "../assets/bakri.png";

// Map gambar
const imageMap = {
  thumb1,
  thumb2,
  thumb3,
};

function Homepage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading articles:", err);
        setLoading(false);
      });
  }, []);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-12 mt-10">
        {/* Left: Articles */}
        <section className="flex-1 min-w-0 space-y-8">
          {loading ? (
            <p className="text-gray-500">Loading articles...</p>
          ) : (
            articles.map((article, index) => (
              <div
                key={article.id}
                className="flex flex-col sm:flex-row gap-4 border-b pb-6"
                onClick={() => {
                  if (index === 0) {
                    setLoading(true);
                    const slug = slugify(article.title);
                    const author = article.author.toLowerCase();

                    setTimeout(() => {
                      navigate(`/@${author}/${slug}`);
                    }, 300);
                  }
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <img
                      src={bakri}
                      alt="Author"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-semibold">{article.author}</span>
                  </div>
                  <h2 className="text-xl font-bold mt-2 hover:underline cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {article.subtitle}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-gray-500 text-xs flex-wrap">
                    <span>{article.date}</span>
                    <span>🔥 {article.views.toLocaleString()}</span>
                    <span>💬 {article.comments}</span>
                  </div>
                </div>

                <img
                  src={imageMap[article.thumbnail]}
                  alt="Thumbnail"
                  className="w-full sm:w-28 h-24 object-cover rounded-md"
                />
              </div>
            ))
          )}
        </section>

        {/* Right: Sidebar */}
        <aside className="w-full lg:w-[300px] space-y-8">
          {/* Staff Picks */}
          <div>
            <h3 className="font-semibold mb-3">Staff Picks</h3>
            {[1, 2, 3].map((item, i) => (
              <div key={i} className="mb-4">
                <p className="text-xs text-gray-500">By Author</p>
                <p className="font-medium hover:underline cursor-pointer">
                  Sample staff pick title
                </p>
                <p className="text-xs text-gray-400">Sep 24</p>
              </div>
            ))}
            <a href="#" className="text-sm text-green-700 hover:underline">
              See the full list
            </a>
          </div>

          {/* Recommended Topics */}
          <div>
            <h3 className="font-semibold mb-3">Recommended topics</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Programming",
                "Writing",
                "Data Science",
                "Politics",
                "Crypto",
              ].map((topic, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Homepage;
