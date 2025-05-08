import { BlogSummary } from "@/config/blog.type"
import Link from "next/link"

interface BlogCardProps {
  blog: BlogSummary
}

export default function BlogCard({ blog }: BlogCardProps) {
  const formattedDate = new Date(Number.parseInt(blog.createdAt)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="border border-slate-600 shadow-lg shadow-green-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 bg-white h-full">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">By {blog.author}</p>
          <p className="text-xs text-gray-500">{formattedDate}</p>
        </div>
      </div>
    </Link>
  )
}
