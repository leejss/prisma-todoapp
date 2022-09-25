import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

const prismaClient = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = prismaClient;

export default prismaClient;
