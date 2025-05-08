"use client"

import { useParams } from "next/navigation"

import Link from "next/link"
import { useBlog } from "@/hooks/useBlog"
import LoadingSpinner from "@/components/loadingComponent"
import ErrorMessage from "@/components/ErrMsg"

export default function BlogDetail() {
  const { id } = useParams()
  const { blog, isLoading, error } = useBlog(id as string)

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        &larr; Back to all blogs
      </Link>

      {isLoading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && blog && (
        <article className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-8">By {blog.author}</p>
          <div className="prose max-w-none">
            <p className="text-gray-800 leading-relaxed">{blog.content}</p>
          </div>
        </article>
      )}
    </main>
  )
}
