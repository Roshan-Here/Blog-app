import Blog from "../models/Blog.js"

export const resolvers = {
    Query: {
        blogs:async ()=>{
            try{
                const blogs = await Blog.find().sort({createdAt :-1})
                return blogs
            }catch(err){
                console.log(err)
                throw new Error(err)
            }
        },
        blog:async (_,{id})=>{
            try{
                const blog = await Blog.findById(id)    
                if(!blog){
                    throw new Error("Blog not found")
                }
                return blog
            }catch(err){
                console.log(err)
                throw new Error(err)
            }
        }
    },
    Mutation:{
        createBlog: async(_, {title, content, author})=>{
            try{
                const newBlog = new Blog({
                    title,
                    content,
                    author
                })
                const blog = await newBlog.save()
                return blog
            }catch(err){
                throw new Error(err)
            }
        }
    }
  };