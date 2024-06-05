import { adminMutation } from "./mutation/admin/index.js";
import { authMutation } from "./mutation/common/auth.js";
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