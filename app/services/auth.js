import { GraphQLError } from "graphql";
import { comparePassword, generateHashOTP, generateToken } from "../utils/helper.js";

export async function onLogin(payload,db){
    try{
        const {Employee,Otp} = db;
        const {email,password,role=2} = payload;
        const isUserExist = await Employee.findOne({where:{email}});
        if(!isUserExist) return new GraphQLError('Email not regiester',{extensions:{code:'EMAIL_NOT_REGISTER',http:{status:404}}});
        const isPasswordMatch = comparePassword(password,isUserExist.password);
        if(!isPasswordMatch) return new GraphQLError('Invalid credentials',{extensions:{code:'INVALID_CREDENTIALS',http:{status:401}}});
        if(role !== isUserExist.role) return new GraphQLError('Role mismatched',{extensions:{code:'ROLE_MISMATCHED',http:{status:401}}});
        const {otp,hashOTP} = generateHashOTP();
        const otpPayload = {
            otp:hashOTP,
            employed_id:isUserExist.id
        }
        const existingOTP = await Otp.findOne({where:{employed_id:isUserExist.id}},{paranoid: false});
        const  otpResponse =  existingOTP?await Otp.update({otp:hashOTP},{where:{employed_id:isUserExist.id}}):await Otp.create(otpPayload);
        console.log(otpResponse)
        const token = generateToken({id:isUserExist.id,email,role});
        return {
            ...isUserExist,token,otp,message:`OTP sent to register email ${email}.`
        }
    }catch(err){
        console.error(err);
        return new GraphQLError('Internal Server Error',{extensions:{code:'INTERNAL_SERVER_ERROR',http:{status:500}}});  
    }
}

export async function onVerifyOTP({otp,userId},db){
    try{
        const {Otp} = db;
        
        return {
            message:'String',
            id:'ID!',
            name:'String!',
            email:'String!',
            phone:'String',
            token:'String!',
        }

    }catch(err){
        console.error(err);
        return new GraphQLError('Internal Server Error',{extensions:{code:'INTERNAL_SERVER_ERROR',http:{status:500}}});  
    }
}