import { adminTypeDefs } from "./admin/index.js";
import { authTypeDefs } from "./common/auth.js";
import { employeeTypeDefs } from "./employee/index.js";
export const typeDefs = `#graphql
  ${authTypeDefs}
  ${adminTypeDefs}
  ${employeeTypeDefs}
`;