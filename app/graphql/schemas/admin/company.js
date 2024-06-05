export const companyTypeDefs = `#graphql
    input CompanyContactPerson {
        name:String!
        email:String!
        phone:String!
        role:String!
        designation:String!
    }
    input CompanyPayload {
        name:String!
        address:String!
        logo:String!
        note:String!
        billingDoc:String!
        billingDate:String!
        industryId:String!
        contactPeople:[CompanyContactPerson!]!
    }
    type CompanySuccessResponse{
        id:String!
    }
    type Mutation {
        createCompany(payload:CompanyPayload):CompanySuccessResponse
    }
`