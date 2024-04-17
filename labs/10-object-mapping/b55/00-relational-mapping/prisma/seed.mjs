import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

const seed = async () => {
  Array.from({ length: Math.floor(Math.random() * 60) }).forEach(
    async () =>
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          name: faker.person.fullName(),
          posts: {
            create: Array.from({
              length: Math.floor(Math.random() * 12),
            }).map(() => ({
              title: faker.commerce.productName(),
              content: faker.lorem.text(),
              published: Math.random() > 0.5,
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
