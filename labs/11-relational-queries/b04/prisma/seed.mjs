import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

const seed = async () => {
  Array.from({ length: Math.floor(1 + Math.random() * 10) }).forEach(
    async () =>
      await prisma.client.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          accounts: {
            create: Array.from({
              length: Math.floor(1 + Math.random() * 3),
            }).map(() => ({
              type: Math.random() > 0.5 ? "current" : "savings",
              balance: Math.random() * 10000,
              transactions: {
                create: Array.from({
                  length: Math.floor(1 + Math.random() * 20),
                }).map(() => ({
                  type: Math.random() > 0.5 ? "withdrawal" : "deposit",
                  amount: Math.random() * 100,
                  date: new Date(
                    Date.now() -
                      Math.floor(Math.random() * 100 * 24 * 60 * 60 * 1000)
                  ),
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
