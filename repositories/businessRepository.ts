import prisma from "../database/database";
import { TransactionTypes } from "./cardRepository.js";

export async function findById(id: number) {
  const query = await prisma.businesses.findUnique({
    where: { id }
  })
  return query;
}
