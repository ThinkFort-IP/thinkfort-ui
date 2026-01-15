"use client";

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  // TODO: Write blogs

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mt-35 mb-20">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Insights you trust
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        {/* TODO */}
        Strategic analysis and evidence-based insights to support your most
        important intellectual property decisions.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
