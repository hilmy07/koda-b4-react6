import React from "react";
import Navbar from "../components/Navbar";
import gpt from "../assets/gpt.png";
import bakri from "../assets/bakri.png";

function DetailPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Container */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Title & Subtitle */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Your ChatGPT History Just Went Public on Google. Here’s What I Did
            in 10 Mins to Fix It.
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            Safety/Privacy Check Prompt Template Is Included
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src={bakri}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">Mohamed Bakry</p>
            <p className="text-xs text-gray-500">7 min read · Aug 9, 2025</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <img src={gpt} alt="Hero" className="rounded-lg shadow" />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none p-3">
          <p className="mt-4 ml-7 mr-7">
            I was checking my morning emails when I spotted it: a Slack message
            from my teammate. It had a screenshot from a Google search.
          </p>
          <p className="mt-4 ml-7 mr-7">“Is this your ChatGPT conversation?”</p>
          <p className="mt-4 ml-7 mr-7">My stomach dropped.</p>
          <p className="mt-4 ml-7 mr-7">
            There, it was a shared ChatGPT link I’d created last month to get
            feedback on a client proposal. Indexed by Google. Searchable by
            anyone.
          </p>
          <p className="mt-4 ml-7 mr-7">
            The talk covered strategy details and sensitive info about my
            client. I really didn’t want that out on the internet.
          </p>
        </article>
      </div>
    </div>
  );
}

export default DetailPage;
