import { validateCardSchema } from "./schemas/validationSchemas";

export const validateCardType = (cardType: string) => {
    const { error } = validateCardSchema.validate({ cardType });
    if(error){
        const { message } = error;
        return { status: false, message };
    }
    return { status: true };
}