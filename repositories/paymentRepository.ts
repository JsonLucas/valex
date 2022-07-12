import dbConnection from '../database/dbConnection';

export interface Payment {
  id: number;
  cardId: number;
  businessId: number;
  timestamp: Date;
  amount: number;
}
export type PaymentWithBusinessName = Payment & { businessName: string };
export type PaymentInsertData = Omit<Payment, "id" | "timestamp">;

export async function findByCardId(cardId: number) {
  const { rowCount, rows } = await dbConnection.query<PaymentWithBusinessName, [number]>(
    `SELECT 
      payments.*,
      businesses.name as "businessName"
     FROM payments 
      JOIN businesses ON businesses.id=payments."businessId"
     WHERE "cardId"=$1
    `,
    [cardId]
  );

  return { rowCount, rows };
}

export async function insert(paymentData: PaymentInsertData) {
  const { cardId, businessId, amount } = paymentData;
  const { rowCount } = await dbConnection.query<any, [number, number, number]>(
    `INSERT INTO payments ("cardId", "businessId", amount) VALUES ($1, $2, $3)`,
    [cardId, businessId, amount]
  );
  return { rowCount };
}

export const calculateBalanceSpent = async (id: number) => {
  const sql = `SELECT SUM(amount) FROM payments WHERE "cardId"=$1`;
  const { rows } = await dbConnection.query(sql, [id]);
  return { sum: rows[0].sum };
}
