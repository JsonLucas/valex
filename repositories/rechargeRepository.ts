import prisma from '../database/database';

export interface Recharge {
  cardId: number;
  amount: number;
}


export async function findByCardId(cardId: number) {
  const query = await prisma.recharges.findMany({
    where: { cardId }
  });
  return query;
}

export async function insert(rechargeData: Recharge) {
  const { cardId, amount } = rechargeData
  const insert = await prisma.recharges.create({
    data: {
      cardId,
      amount
    }
  });
  return insert;
}

export const calculateCardBalance = async (id: number) => {
  const countRecharges = await prisma.recharges.count({
    where: {
      id
    }
  });
  return countRecharges;
}
