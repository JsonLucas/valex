import prisma from "../database/database";

export interface Employee {
  id: number;
  fullName: string;
  cpf: string;
  email: string;
  companyId: number;
}

export async function findById(id: number) {
  const employee = await prisma.employees.findUnique({
    where:{ id }
  });
  return employee;
}

export const findByEmail = async (email: string) => {
  const employee = await prisma.employees.findUnique({
    where: { email }
  });
  return employee;
}

export const verifyEmployee = async (email: string, id: number) => {
  const employee = await prisma.employees.findFirst({
    where: { email, companyId: id }
  });
  return employee;
}
