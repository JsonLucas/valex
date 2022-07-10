import { faker } from '@faker-js/faker';

export const generateCardNumber = () => {
    return faker.finance.creditCardNumber('#### #### #### ###L');
} 

export const generateCardSecurityCode = () => {
    const cvv = faker.finance.creditCardCVV();
    console.log(cvv);
    return cvv;
}