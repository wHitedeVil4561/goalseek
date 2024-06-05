import { comparePassword, generateToken } from "../utils/helper.js";

export async function onLogin(payload,db){
    try{
        const {Employee} = db;
        const {email,password,role=2} = payload;
        const isUserExist = await Employee.findOne({where:{email}});
        console.log(isUserExist);
        if(!isUserExist) return new Error('Email does not exists');
        const isPasswordMatch = comparePassword(password,isUserExist.password);
        if(!isPasswordMatch) return new Error('Invalid credentials');
        if(role !== isUserExist.role) return new Error('Role mismatched');
        const token = generateToken({id:isUserExist.id,email,role});
        if(!token) return new Error('Error in token creation.');
        return {
            ...isUserExist,token
        }
    }catch(err){
        console.error(err);
        throw new Error('SOMETHING WENT WRONG')  
    }

}