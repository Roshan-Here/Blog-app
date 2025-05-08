export interface BlogSummary {
    id: string
    title: string
    author: string
    createdAt: string
  }
  
  export interface BlogDetail {
    title: string
    author: string
    content: string
  }
  
  export interface BlogsResponse {
    data: {
      blogs: BlogSummary[]
    }
  }
  
  export interface BlogDetailResponse {
    data: {
      blog: BlogDetail
    }
  }
  