import { ISignUser, Login } from "../interfaces/users";
import { signInSchema, signUpSchema, validateCardSchema } from "./schemas/validationSchemas";

export const validateCardType = (cardType: string) => {
    const { error } = validateCardSchema.validate({ cardType });
    if(error){
        const { message } = error;
        return { status: false, message };
    }
    return { status: true };
}

export const validateSignUp = (body: ISignUser) => {
    const { error } = signUpSchema.validate(body);
    if(error) {
        return { status: false, error };
    }
    return { status: true };
}

export const validateSignIn = (body: Login) => {
    const { error } = signInSchema.validate(body);
    if(error) {
        return { status: false, error };
    }
    return { status: true };
}