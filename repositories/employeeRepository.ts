import dbConnection from "../database/dbConnection";

export interface Employee {
  id: number;
  fullName: string;
  cpf: string;
  email: string;
  companyId: number;
}

export async function findById(id: number) {
  const {rowCount, rows} = await dbConnection.query<Employee, [number]>(
    "SELECT * FROM employees WHERE id=$1",
    [id]
  );

  return { rowCount, rows };
}

export const findByEmail = async (email: string) => {
  const sql = `SELECT * FROM employees WHERE email=$1`;
  const { rowCount, rows } = await dbConnection.query<Employee>(sql, [email]);
  return { rowCount, rows };
}

export const verifyEmployee = async (email: string, id: number) => {
  const sql = `SELECT * FROM employees JOIN companies ON employees."companyId"="companies"."id" 
  WHERE employees."email"=$1 AND "companies"."id"=$2`;
  const { rowCount, rows } = await dbConnection.query(sql, [email, id]);
  return { rowCount, rows };
}
