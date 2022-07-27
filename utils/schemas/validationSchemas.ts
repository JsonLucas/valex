import joi from 'joi';

export const validateCardSchema = joi.object({
    cardType: joi.string().required().allow('groceries', 'restaurants', 'transport', 'education', 'health')
});

export const signUpSchema = joi.object({
    companyName: joi.string().required(),
    accountType: joi.string().equal('Employee', 'Company').required(),
    login: joi.string().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});

export const signInSchema = joi.object({
    login: joi.string().required(),
    password: joi.string().required(),
    accountType: joi.string().equal('Employee', 'Company').required()
});