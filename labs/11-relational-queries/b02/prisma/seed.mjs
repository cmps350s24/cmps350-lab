import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

const seed = async () => {
  Array.from({ length: Math.floor(1 + Math.random() * 9) }).forEach(
    async () =>
      await prisma.client.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          accounts: {
            create: Array.from({
              length: Math.floor(1 + Math.random() * 2),
            }).map(() => ({
              type: Math.random() > 0.5 ? "savings" : "current",
              balance: Math.floor(Math.random() * 10000),
              transactions: {
                create: Array.from({
                  length: Math.floor(1 + Math.random() * 2),
                }).map(() => ({
                  type: Math.random() > 0.5 ? "deposit" : "withdrawal",
                  amount: Math.floor(Math.random() * 1000),
                })),
              },
            })),
          },
        },
      })
  );
};

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
