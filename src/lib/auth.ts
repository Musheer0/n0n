import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | null = null;

const getPrisma = () => {
  if (!prisma) prisma = new PrismaClient();
  return prisma;
};

export const auth = betterAuth({
  database: prismaAdapter(() => getPrisma(), {
    provider: "postgresql",
  }),
});
