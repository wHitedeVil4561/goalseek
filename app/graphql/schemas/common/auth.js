export const authTypeDefs =  `#graphql
    input LoginInput{
        email:String!
        password:String!
        role:Int
    }
    type LoginResponse {
        message:String
        id:ID!
        name:String!
        email:String!
        phone:String
        token:String!
        otp:Int
    }
    type VerifyOtpResponse {
        message:String
        id:ID!
        name:String!
        email:String!
        phone:String
        token:String!
    }

    type Mutation {
        login(payload:LoginInput!):LoginResponse
        verifyOTP(otp:Int!):VerifyOtpResponse
    }
`;