"use client"

import { fetchBlogs } from "@/config/api"
import { BlogSummary } from "@/config/blog.type"
import { useState, useEffect } from "react"

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<BlogSummary[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let retryCount = 0
    const maxRetries = 5
    const retryDelay = 3000 // 3 seconds

    const getBlogs = async () => {
      try {
        setIsLoading(true)
        const response = await fetchBlogs()

        const sortedBlogs = response.data.blogs.sort(
          (a, b) => Number.parseInt(b.createdAt) - Number.parseInt(a.createdAt),
        )

        setBlogs(sortedBlogs)
        setError(null)
        setIsLoading(false)
      } catch (err) {
        retryCount++
        if (retryCount <= maxRetries) {
          setTimeout(getBlogs, retryDelay)
        } else {
          setError("Failed to fetch blogs after several attempts.")
          setIsLoading(false)
        }
      }
    }

    getBlogs()
  }, [])

  return { blogs, isLoading, error }
}
