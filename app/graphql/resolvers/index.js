import { adminMutation } from "./mutation/admin/index.js";
import { authMutation } from "./mutation/auth/index.js";
import { employeQueries } from "./queries/employee/index.js";

export const resolvers = {
    Query:{
        ...employeQueries
    },
    Mutation:{
        ...authMutation,
        ...adminMutation
    }
}