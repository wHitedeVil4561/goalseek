import joi from 'joi'
import {REGEX} from '../../constant/regex.constant.js'
export const addCompanySchema = joi.object({
  name: joi.string().min(3).max(100).required(),
  phone: joi.string().pattern(REGEX.PHONE).required(),
  email: joi.string().pattern(REGEX.EMAIL).email(),
  address: joi.string(),
});