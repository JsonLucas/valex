import jwt from 'jsonwebtoken';
import { jwtSecret } from './envConfig';

export const tokenGeneration = (id: number) => {
    if(jwtSecret){
        return jwt.sign(id.toString(), jwtSecret, {});
    }
    throw { code: 500 };
}

export const decodeToken = (token: string) => {
    if(jwtSecret && jwt.verify(token, jwtSecret, {})){
        return jwt.decode(token);
    }
    throw { code: 401, error: 'invalid token.' };
}