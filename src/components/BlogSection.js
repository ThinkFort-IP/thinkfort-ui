"use client"

import { useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  // TODO: Write blogs
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      author: "Pranjal Tripathi",
      title: "orem ipsum dolor sit amet",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis bibendum felis a dignissim. Sed nulla dui, semper sit amet magna vel, tempor accumsan ex.",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=800",
    },
    {
      id: 2,
      author: "Ekansh Nigam",
      title: "orem ipsum dolor sit amet",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis bibendum felis a dignissim. Sed nulla dui, semper sit amet magna vel, tempor accumsan ex.",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=800",
    },
    {
      id: 3,
      author: "Vishal Yadav",
      title: "orem ipsum dolor sit amet",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis bibendum felis a dignissim. Sed nulla dui, semper sit amet magna vel, tempor accumsan ex.",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=800",
    },
  ]);
  return (
    <div className="mt-35 mb-20">
      <h1 className="text-3xl font-semibold text-center mx-auto">Insights you trust</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        {/* TODO */}
        Strategic analysis and evidence-based insights to support your most important intellectual property decisions.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog}/>
        ))}
      </div>
    </div>
  );
}
