import axios from "axios"
import type {BlogsResponse, BlogDetailResponse} from "./blog.type"

const API_URL = "https://blog-app-woad-two.vercel.app"
// const API_URL = "http://localhost:5173"

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

  export const fetchBlogById = async (id: string): Promise<BlogDetailResponse> => {
    try {
      const response = await axios.post<BlogDetailResponse>(`${API_URL}/graphql`,
        {
            query: `
                query($id: ID!) { blog(id: $id) { title author content } }
            `,
            "variables": {
                "id": `${id}`
              }
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }

      )
      return response.data
    } catch (error) {
      console.error(`Error fetching blog with ID ${id}:`, error)
      throw error
    }
  }