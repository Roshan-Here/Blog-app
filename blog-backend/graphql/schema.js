export const typeDefs = `
    type Blog {
        id: ID!
        title: String!
        content: String!
        author: String!
        createdAt: String
    }

    type Query {
        blogs: [Blog]!
        blog(id: ID!): Blog
    }

    type Mutation {
        createBlog(title: String!, content: String!, author: String!): Blog!
    }

`;