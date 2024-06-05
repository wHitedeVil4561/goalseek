import {genSaltSync, hashSync,compareSync} from 'bcrypt';
import jwt from "jsonwebtoken"
import { CONFIG } from '../constant/environment.constant.js';

function generateOtp(length) {
  const otp = Math.floor(
    10 ** (length - 1) + Math.random() * (10 ** (length - 1) * 9)
  );
  return '123456';
};
export function getPagination (page, size) {
  const limit = size || 10;
  const offset = page ? (page - 1) * limit : 0;
  return { limit, offset };
};


export function generateHashPassword(password){
  const salt = genSaltSync(CONFIG.SALT_ROUND);
  return hashSync(password,salt);
}

// INSERT INTO public.employees ( id,name,email,phone,password,role,created_at,updated_at ) values ( uuid_generate_v4(),'admin','admin@yopmail.com','6388261217','$2b$10$jckL1mlc1zNi2Gi4FiaVa.JCfKCO4Gbc1eXwndDowL9sttDMZMCke',1,NOW(), now() )

export function comparePassword(password,hashPassword){
  return compareSync(password,hashPassword);
}

export function generateToken(payload){
 const token = jwt.sign(payload,CONFIG.JWT_SECRET_KEY,{expiresIn:CONFIG.JWT_EXPIRE_IN});
 return token ?? new Error('Internal Server Error')
}

export function generateHashOTP(){
  const otp = generateOtp(CONFIG.OTP_LENGTH);
  const hashOTP = generateHashPassword(otp);
  return {otp,hashOTP};
}