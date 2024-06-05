import { GraphQLError } from "graphql";
import { onLogin, onVerifyOTP } from "../../../../services/auth.js"
import {validateToken} from '../../../../utils/validator.js'
export const authMutation = {
    async login(_,{payload},{db}){
        return await onLogin(payload,db);
    },
    async verifyOTP(_,{otp},{db,bearerToken}){
        try{
            const decodedData = validateToken(bearerToken);
            console.log(typeof decodedData)
            const {id} = decodedData;
            return onVerifyOTP({otp,id},db)
        }catch(err){
            console.log(err);
            return new GraphQLError('Internal Server Error',{extensions:{code:'INTERNAL_SERVER_ERROR',http:{status:500}}});  
        }
    }
}