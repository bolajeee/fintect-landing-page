import React from "react";

import secure from "../images/hero/secure-icon.png";
import blog1 from "../images/blogs/blog1.png";
import blog2 from "../../images/blogs/blog2.png";
import blog3 from "../images/blogs/blog3.png";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Navigate International Payments for Education With Ease",
      image: blog1,
      excerpt:
        "Learn the best practices for managing international education payments efficiently...",
      date: "March 15, 2024",
      category: "Education",
    },
    {
      id: 2,
      title: "Importance of getting Insurance before traveling",
      image: blog2,
      excerpt:
        "Discover why travel insurance is crucial for international students...",
      date: "March 10, 2024",
      category: "Travel",
    },
    {
      id: 3,
      title: "Overcoming Challenges in Foreign Currency Tuition Payments",
      image: blog3,
      excerpt:
        "Tips and strategies for handling foreign currency transactions...",
      date: "March 5, 2024",
      category: "Finance",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-center mb-8">
        <div className="inline-flex justify-center items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
          <img src={secure} alt="" className="h-4 w-4" />
          <span className="text-sm font-medium text-green-800">BLOGS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="mx-2">•</span>
                <span className="text-sm text-green-600">{post.category}</span>
              </div>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="group flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-black px-2 py-2 rounded-full transition-all duration-300">
                <svg
                  className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 19L19 5M19 5H8M19 5V16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 space-x-4">
        <button className="p-2 rounded-full border hover:bg-gray-100">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="p-2 rounded-full border hover:bg-gray-100">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
