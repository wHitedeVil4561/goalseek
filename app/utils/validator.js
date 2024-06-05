import { GraphQLError } from "graphql";
import httpStatus from "http-status";
import jwt from 'jsonwebtoken'
import { CONFIG } from "../constant/environment.constant.js";
export function validateSchema(schema, payload = {}) {
  const { error } = schema.validate(payload);
    const valid = error == null;
    if (valid) {
      return true;
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      console.log(message);
      throw new GraphQLError(message,{
        extensions:{
            code:'BAD_REQUEST',
            http:{
                status:httpStatus.BAD_REQUEST
            }
        }
      });
    }
}


export function validateToken(token){
  try {
    if (!token) {
      return new GraphQLError('Missing Token',{extensions:{code:'MISSING_TOKEN',http:{status:httpStatus.UNAUTHORIZED}}}); 
    }
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token,CONFIG.JWT_SECRET_KEY);
    return decoded
  } catch (err) {
    console.log(err);
    return new GraphQLError('Invalid Token',{extensions:{code:'INVALID_TOKEN',http:{status:httpStatus.UNAUTHORIZED}}})
  }
}
