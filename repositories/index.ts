import { 
    find, 
    findById as findCardById, 
    findByTypeAndEmployeeId,
    activateCard,
    lockCard,
    unlockCard,
    insert as insertCard, 
    remove 
} from "./cardRepository";
import { findById as findBusinessById } from "./businessRepository";
import { findByApiKey } from './companyRepository';
import { findById as findEmployeeById, findByEmail, verifyEmployee } from './employeeRepository';
import { findByCardId, insert as insertPayment, calculateBalanceSpent } from './paymentRepository';
import { 
    findByCardId as findRechargeByCardId, 
    insert as insertRecharge, 
    calculateCardBalance 
} from "./rechargeRepository";

export const cardRepository = {
    find, findCardById, findByTypeAndEmployeeId, activateCard, lockCard, unlockCard, 
    insertCard, remove
}

export const businessRepository = { findBusinessById };

export const companyRepository = { findByApiKey };

export const employeeRepository = { findEmployeeById, findByEmail, verifyEmployee };

export const paymentRepository = { findByCardId, insertPayment, calculateBalanceSpent };

export const rechargeRepository = { findRechargeByCardId, insertRecharge, calculateCardBalance};