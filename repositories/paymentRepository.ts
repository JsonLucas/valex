import prisma from '../database/database';

export interface Payment {
  id: number;
  cardId: number;
  businessesId: number;
  timestamp: Date;
  amount: number;
}
export type PaymentWithBusinessName = Payment & { businessName: string };
export type PaymentInsertData = Omit<Payment, "id" | "timestamp">;

export async function findByCardId(cardId: number) {
  const payments = await prisma.payments.findMany({
    where: { cardId }
  });
  return payments;
}

export async function insert(paymentData: PaymentInsertData) {
  const { cardId, businessesId, amount } = paymentData;
  const insert = await prisma.payments.create({
    data: { cardId, businessesId, amount }
  });
  return insert;
}

export const calculateBalanceSpent = async (id: number) => {
  const countSpent = await prisma.payments.count({
    where: { cardId: id }
  });
  return countSpent;
}
