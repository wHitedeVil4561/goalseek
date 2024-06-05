export const userTypeDefs = `#graphql
    type User {
        id:String!
    }
    type Query {
        user(id:String!):User
    }
`