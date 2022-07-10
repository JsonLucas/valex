import { validateCardSchema } from "./validationSchemas";

export const validateCardType = (cardType: string, cardPassword: number) => {
    const { error } = validateCardSchema.validate({ cardType, cardPassword });
    if(error){
        const { message } = error;
        return { status: false, message };
    }
    return { status: true };
}