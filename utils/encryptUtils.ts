import cryptr from 'cryptr';

export const encryptCardPassword = (password: string) => {
    const encrypt = new cryptr(password);
    return encrypt.encrypt(password);
} 

export const decryptCardPassword = (password: string) => {
    const decrypt = new cryptr(password);
    return decrypt.decrypt(password);
} 

export const encryptCardSecurityCode = (securityCode: string) => {
    const encrypt = new cryptr(securityCode);
    return encrypt.encrypt(securityCode);
} 

export const decryptCardSecurityCode = (securityCode: string) => {
    const decrypt = new cryptr(securityCode);
    return decrypt.decrypt(securityCode);
} 