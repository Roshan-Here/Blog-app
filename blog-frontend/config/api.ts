import axios from "axios"
import type {BlogsResponse, BlogDetailResponse} from "./blog.type"

const API_URL = "http://localhost:5173"

export const fetchBlogs = async (): Promise<BlogsResponse> => {
    try {
      const response = await axios.post<BlogsResponse>(
        `${API_URL}/graphql`,
        {
          query: `
            query {
              blogs {
                id
                title
                author
                createdAt
              }
            }
          `
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
  
      return response.data
    } catch (error) {
      console.error("Error fetching blogs:", error)
      throw error
    }
  }