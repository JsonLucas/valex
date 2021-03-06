import dbConnection from "../database/dbConnection";
import { mapObjectToUpdateQuery } from "../utils/sqlUtils.js";

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
  originalCardId?: number | null;
  isBlocked: boolean;
  type: TransactionTypes;
}

export type CardInsertData = Omit<Card, "id">;
export type CardUpdateData = Partial<Card>;

export async function find() {
  const result = await dbConnection.query<Card>("SELECT * FROM cards");
  return result.rows;
}

export async function findById(id: number) {
  const { rowCount, rows } = await dbConnection.query<Card, [number]>(
    "SELECT * FROM cards WHERE id=$1",
    [id]
  );

  return { rowCount, rows };
}

export async function findByTypeAndEmployeeId(type: TransactionTypes, employeeId: number) {
  const { rowCount, rows } = await dbConnection.query<Card, [TransactionTypes, number]>(
    `SELECT * FROM cards WHERE type=$1 AND "employeeId"=$2`,
    [type, employeeId]
  );

  return { rowCount, rows };
}

export async function findByCardDetails(
  number: string,
  cardholderName: string,
  expirationDate: string
) {
  const result = await dbConnection.query<Card, [string, string, string]>(
    ` SELECT 
        * 
      FROM cards 
      WHERE number=$1 AND "cardholderName"=$2 AND "expirationDate"=$3`,
    [number, cardholderName, expirationDate]
  );

  return result.rows[0];
}

export async function insert(cardData: CardInsertData) {
  const {
    employeeId,
    number,
    cardholderName,
    securityCode,
    expirationDate,
    password,
    isVirtual,
    originalCardId,
    isBlocked,
    type,
  } = cardData;

  dbConnection.query(
    `
    INSERT INTO cards ("employeeId", number, "cardholderName", "securityCode",
      "expirationDate", password, "isVirtual", "originalCardId", "isBlocked", type)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
  `,
    [
      employeeId,
      number,
      cardholderName,
      securityCode,
      expirationDate,
      password,
      isVirtual,
      originalCardId,
      isBlocked,
      type,
    ]
  );
}

export async function update(id: number, cardData: CardUpdateData) {
  const { objectColumns: cardColumns, objectValues: cardValues } =
    mapObjectToUpdateQuery({
      object: cardData,
      offset: 2,
    });

  dbConnection.query(
    `
    UPDATE cards
      SET ${cardColumns}
    WHERE $1=id
  `,
    [id, ...cardValues]
  );
}

export const activateCard = async (id: number, password: string) => {
  const sql = `UPDATE cards SET password=$1, "isBlocked"=$2 WHERE id=$3`;
  const { rowCount } = await dbConnection.query(sql, [password, false, id]);
  return { rowCount };
}

export const unlockCard = async (id: number) => {
  const sql = `UPDATE cards SET "isBlocked"=$1 WHERE id=$2`;
  const { rowCount } = await dbConnection.query(sql, [false, id]);
  return { rowCount };
}

export const lockCard = async (id: number) => {
  const sql = `UPDATE cards SET "isBlocked"=$1 WHERE id=$2`;
  const { rowCount } = await dbConnection.query(sql, [true, id]);
  return { rowCount };
}

export async function remove(id: number) {
  dbConnection.query<any, [number]>("DELETE FROM cards WHERE id=$1", [id]);
}
