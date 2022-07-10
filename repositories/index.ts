import { 
    find, 
    findById as findCardById, 
    findByTypeAndEmployeeId,
    findByCardDetails, 
    activateCard,
    insert as insertCard, 
    update, 
    remove 
} from "./cardRepository";
import { findById as findBusinessById } from "./businessRepository";
import { findByApiKey } from './companyRepository';
import { findById as findEmployeeById, findByEmail } from './employeeRepository';
import { findByCardId, insert as insertPayment } from './paymentRepository';
import { findByCardId as findRechargeByCardId, insert as insertRecharge } from "./rechargeRepository";

export const cardRepository = {
    find, findCardById, findByTypeAndEmployeeId, activateCard, findByCardDetails, insertCard, update, remove
}

export const businessRepository = { findBusinessById };

export const companyRepository = { findByApiKey };

export const employeeRepository = { findEmployeeById, findByEmail };

export const paymentRepository = { findByCardId, insertPayment };

export const rechargeRepository = { findRechargeByCardId, insertRecharge };