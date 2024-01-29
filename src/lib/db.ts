// Importing the PrismaClient from the Prisma client library
import { PrismaClient } from "@prisma/client";

// Declare a global variable 'prisma' in the global scope with type PrismaClient | undefined
declare global {
  var prisma: PrismaClient | undefined;
}

// Exporting a constant 'db' which is either the globally declared 'prisma' or a new instance of PrismaClient
export const db = globalThis.prisma || new PrismaClient();

// If the Node.js environment is not in production, assign 'db' to the global 'prisma' variable
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
