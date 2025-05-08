"use client"

import { fetchBlogById } from "@/config/api"
import { BlogDetail } from "@/config/blog.type"
import { useState, useEffect } from "react"


export const useBlog = (id: string) => {
  const [blog, setBlog] = useState<BlogDetail | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getBlog = async () => {
      try {
        setIsLoading(true)
        const response = await fetchBlogById(id)
        setBlog(response.data.blog)
        setError(null)
      } catch (err) {
        setError("Failed to fetch blog details. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      getBlog()
    }
  }, [id])

  return { blog, isLoading, error }
}
