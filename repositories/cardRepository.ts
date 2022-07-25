import prisma from "../database/database";

export type TransactionTypes =
  | "groceries"
  | "restaurant"
  | "transport"
  | "education"
  | "health";

export interface Card {
  id: number;
  employeeId: number;
  number: string;
  cardholderName: string;
  securityCode: string;
  expirationDate: string;
  password?: string | null;
  isVirtual: boolean;
  isBlocked: boolean;
  type: TransactionTypes;
}

export type CardInsertData = Omit<Card, "id">;
export type CardUpdateData = Partial<Card>;

export async function find() {
  const query = await prisma.cards.findMany();
  return query;
}

export async function findById(id: number) {
  const query = await prisma.cards.findUnique({
    where: { id }
  });
  return query;
}

export async function findByTypeAndEmployeeId(type: TransactionTypes, employeeId: number) {
  const query = await prisma.cards.findFirst({
    where:{ employeeId, type }
  });
  return query;
}

export async function insert(cardData: CardInsertData) {
  const {
    employeeId,
    number,
    cardholderName,
    securityCode,
    expirationDate,
    isVirtual,
    isBlocked,
    type,
  } = cardData;
  const insert = await prisma.cards.create({
    data: { 
      employeeId, number, cardholderName, securityCode, 
      expirationDate, isBlocked, isVirtual, type, password: ''
    }
  });
  return insert;
}

export const activateCard = async (id: number, password: string) => {
  const update = await prisma.cards.update({
    data: { password },
    where: { id }
  }); 
  return update;
}

export const unlockCard = async (id: number) => {
  const unlock = await prisma.cards.update({
    data: { isBlocked: false },
    where: { id }
  });
  return unlock;
}

export const lockCard = async (id: number) => {
  const lock = await prisma.cards.update({
    data: { isBlocked: true },
    where: { id }
  });
  return lock;
}

export async function remove(id: number) {
  const unlink = await prisma.cards.delete({
    where:{ id }
  });
  return unlink;
}
