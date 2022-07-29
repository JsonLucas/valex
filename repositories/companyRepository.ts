import prisma from "../database/database";

export interface Company {
  name: string,
  apiKey: string,
  login: string,
  password: string
}

export async function findByApiKey(apiKey: string) {
  const company = await prisma.companies.findUnique({
    where: { apiKey }
  });
  return company;
}

export const findByName = async (name: string) => {}

export const insert = async (data: Company) => {
  return await prisma.companies.create({
    data: { ...data }
  });
}
