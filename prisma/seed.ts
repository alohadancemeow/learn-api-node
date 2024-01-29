import { db } from "../src/lib/db";
import { Product } from "@prisma/client";

const seedData: Product[] = [
  {
    id: 1,
    name: "product1",
    price: 199.0,
  },
  {
    id: 2,
    name: "product2",
    price: 299.0,
  },
  {
    id: 3,
    name: "product3",
    price: 399.0,
  },
  {
    id: 4,
    name: "product4",
    price: 499.0,
  },
  {
    id: 5,
    name: "product5",
    price: 599.0,
  },
];

const seed = async () => {
  for (const item of seedData) {
    await db.product.create({
      data: item,
    });
  }
};

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await db.$disconnect();
  });
