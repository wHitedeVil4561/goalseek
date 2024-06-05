export const authTypeDefs =  `#graphql
    input LoginInput{
        email:String!
        password:String!
        role:Int
    }
    type LoginResponse {
        id:ID!
        name:String!
        email:String!
        phone:String
        token:String!
    }
    type Mutation{
        login(payload:LoginInput!):LoginResponse
    }
`;