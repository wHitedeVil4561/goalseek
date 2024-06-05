import {genSaltSync, hashSync,compareSync} from 'bcrypt';
import jwt from "jsonwebtoken"
import { CONFIG } from '../constant/environment.constant.js';

export function getPagination (page, size) {
  const limit = size || 10;
  const offset = page ? (page - 1) * limit : 0;
  return { limit, offset };
};


export function generateHashPassword(password){
  const salt = genSaltSync(CONFIG.SALT_ROUND);
  return hashSync(password,salt);
}

export function comparePassword(password,hashPassword){
  return compareSync(password,hashPassword);
}

export function generateToken(payload){
 const token = jwt.sign(payload,CONFIG.JWT_SECRET_KEY,{expiresIn:CONFIG.JWT_EXPIRE_IN});
 return token ?? false
}