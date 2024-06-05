import { addCompany } from "../../../../services/admin/company.js";
import { validateSchema } from "../../../../utils/validator.js";
import { addCompanySchema } from "../../../../validation/admin/company.js";
async function createCompany(_, { payload }) {
  validateSchema(addCompanySchema, payload);
  return addCompany(payload);
}

export const companyMutation = {
  createCompany,
};
