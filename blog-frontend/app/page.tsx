"use client";

import BlogCard from "@/components/blogCard";
import ErrorMessage from "@/components/ErrMsg";
import LoadingSpinner from "@/components/loadingComponent";
import { useBlogs } from "@/hooks/useBlogs";

export default function Home() {
  const { blogs, isLoading, error } = useBlogs()
  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog App</h1>
      {isLoading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
