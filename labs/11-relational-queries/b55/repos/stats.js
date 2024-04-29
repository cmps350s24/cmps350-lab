import prisma from "@/repos/prisma";

export async function getClients() {
  return await prisma.client.findMany();
}

export async function getAccountBalanceAvg() {
  return await prisma.account.aggregate({
    _avg: {
      balance: true,
    },
  });
}

export async function getAccountMinMax() {
  const minAccount = await prisma.account.findMany({
    orderBy: [
      {
        balance: "asc",
      },
    ],
    take: 1,
  });
  const maxAccount = await prisma.account.findMany({
    orderBy: [
      {
        balance: "desc",
      },
    ],
    take: 1,
  });
  return { min: minAccount[0], max: maxAccount[0] };
}

export async function getAccountTop3() {
  return await prisma.account.findMany({
    orderBy: [
      {
        balance: "desc",
      },
    ],
    take: 3,
  });
}

export async function getTransactionAccount(id, from, to) {
  return await prisma.transaction.findMany({
    where: {
      account: id,
      date: {
        gte: from,
        lte: to,
      },
    },
  });
}

export async function getTransactionTotal(from, to) {
  return prisma.transaction.aggregate({
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

export async function getTransactionTotalByAccount(from, to) {
  return await prisma.transaction.aggregate({
    by: ["account"],
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

export async function getClientReport(id) {
  return await prisma.client.findUnique({
    where: {
      id: id,
    },
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
  return await prisma.account.aggregate({
    by: ["client"],
    _sum: {
      balance: true,
    },
    orderBy: {
      _sum: {
        balance: "desc",
      },
    },
    take: 1,
  });
}
