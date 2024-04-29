import prisma from "@/repos/prisma";

export async function getClients() {
  return await prisma.client.findMany({
    include: {
      accounts: {
        include: {
          transactions: true,
        },
      },
    },
  });
}

export async function getAccountBalanceAvg() {
  return await prisma.account.aggregate({
    _avg: {
      balance: true,
    },
  });
}

export async function getAccountMinMax() {
  return {
    min: await prisma.account.findMany({
      orderBy: [{ balance: "asc" }],
      take: 1,
    }),
    max: await prisma.account.findMany({
      orderBy: [{ balance: "desc" }],
      take: 1,
    }),
  };
}

export async function getAccountTop3() {
  return await prisma.account.findMany({
    orderBy: [{ balance: "desc" }],
    take: 3,
  });
}

export async function getTransactionAccount(id, from, to) {
  return await prisma.transaction.findMany({
    where: {
      client: id,
      date: {
        gte: from,
        lte: to,
      },
    },
  });
}

export async function getTransactionTotal(from, to) {
  return await prisma.transaction.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      date: {
        gte: from,
        lte: to,
      },
    },
  });
}

export async function getTransactionAccountTotal(id, from, to) {
  return await prisma.transaction.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      account: id,
      date: {
        gte: from,
        lte: to,
      },
    },
  });
}

export async function getClientReport(id) {
  return await prisma.client.findMany({
    client: id,
    include: {
      accounts: {
        include: {
          transactions: true,
        },
      },
    },
  });
}

export async function getClientTop() {
  const result = await prisma.account.aggregate({
    by: ["client"],
    _sum: {
      balance: true,
    },
    take: 1,
  });
  return await prisma.client.findUnique({
    id: result.client,
  });
}
