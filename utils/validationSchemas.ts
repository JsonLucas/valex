import joi from 'joi';

export const validateCardSchema = joi.object({
    cardType: joi.string().required().allow('groceries', 'restaurants', 'transport', 'education', 'health'),
    cardPassword: joi.number().max(9999)
});