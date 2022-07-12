import { faker } from '@faker-js/faker';

export const generateCardNumber = () => {
    return faker.finance.creditCardNumber('#### #### #### ###L');
} 

export const generateCardSecurityCode = () => {
    return faker.finance.creditCardCVV();
}