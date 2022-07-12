import dbConnection from '../database/dbConnection';

export interface Recharge {
  id: number;
  cardId: number;
  timestamp: Date;
  amount: number;
}
export type RechargeInsertData = Omit<Recharge, "id" | "timestamp">;

export async function findByCardId(cardId: number) {
  const result = await dbConnection.query<Recharge, [number]>(
    `SELECT * FROM recharges WHERE "cardId"=$1`,
    [cardId]
  );

  return result.rows;
}

export async function insert(rechargeData: RechargeInsertData) {
  const { cardId, amount } = rechargeData;
  const { rowCount } = await dbConnection.query<any, [number, number]>(
    `INSERT INTO recharges ("cardId", amount) VALUES ($1, $2)`,
    [cardId, amount]
  );
  return { rowCount };
}

export const calculateCardBalance = async (id: number) => {
  const sql = `SELECT SUM(amount) FROM recharges WHERE id=$1`;
  const { rows } = await dbConnection.query(sql, [id]);
  return { sum: rows[0].sum };
}
