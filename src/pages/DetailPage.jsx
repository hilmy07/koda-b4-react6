import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import bakri from "../assets/bakri.png";
import placeholder from "../assets/placeholder.png";

// Gambar thumbnail
import thumb1 from "../assets/gpt.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";

// Peta thumbnail
const imageMap = {
  thumb1,
  thumb2,
  thumb3,
};

// Mapping author → foto khusus
const authorImageMap = {
  "mohamed bakry": bakri,
};

function DetailPage() {
  const { author, slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const slugifyAuthor = (name) => name.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => {
        const match = data.find((item) => {
          const generatedSlug = slugify(item.title);
          const generatedAuthor = slugifyAuthor(item.author);
          return generatedSlug === slug && generatedAuthor === author;
        });

        setArticle(match || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching article:", err);
        setLoading(false);
      });
  }, [author, slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading article...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Article not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 mt-20">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          {article.title}
        </h1>
        <p className="text-gray-500 mt-3 text-sm">{article.subtitle}</p>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-6 mb-8">
          <img
            src={authorImageMap[article.author.toLowerCase()] || placeholder}
            alt={article.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{article.author}</p>
            <p className="text-xs text-gray-500">
              7 min read · {article.date}, 2025
            </p>
          </div>
        </div>

        {/* Hero Thumbnail */}
        <div className="mb-8">
          <img
            src={imageMap[article.thumbnail]}
            alt="Thumbnail"
            className="rounded-lg shadow"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {article.content.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </article>
      </div>
    </div>
  );
}

export default DetailPage;
