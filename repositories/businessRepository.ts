import dbConnection from "../database/dbConnection";
import { TransactionTypes } from "./cardRepository.js";

export interface Business {
  id: number;
  name: string;
  type: TransactionTypes;
}

export async function findById(id: number) {
  const sql = "SELECT * FROM businesses WHERE id=$1";
  const { rowCount, rows } = await dbConnection.query<Business, [number]>(sql, [id]);
  return { rowCount, rows };
}
