import { onLogin } from "../../../../services/auth.js"

export const authMutation = {
    async login(_,{payload},{db}){
        return await onLogin(payload,db);
    }
}