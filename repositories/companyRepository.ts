import prisma from "../database/database";

export interface Company {
  id: number;
  name: string;
  apiKey?: string;
}

export async function findByApiKey(apiKey: string) {
  const company = await prisma.companies.findUnique({
    where: { apiKey }
  });
  return company;
}

export const findByName = async (name: string) => {}

export const insert = async (data: any) => {}
