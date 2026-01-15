"use client";
import BlogPage from "@/components/BlogPage";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  if (!blog) return null;
  const { slug } = params;

  const currentBlog = blog?.find((b) => b.slug === slug);

  return (
    <div className="mt-35">
      {currentBlog && <BlogPage blog={currentBlog} />}
    </div>
  );
}
