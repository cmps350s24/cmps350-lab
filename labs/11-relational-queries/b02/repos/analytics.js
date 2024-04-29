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

export async function getAverageBalanceAvg() {
  return await prisma.account.groupBy({
    by: ["type"],
    _avg: {
      balance: true,
    },
  });
}

export async function getAccountMinMax() {
  // return await prisma.account.aggregate({
  //   _min: {
  //     id: false,
  //     balance: true,
  //   },
  //   _max: {
  //     id: false,
  //     balance: true,
  //   },
  // });

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
      account: id,
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
      balance: true,
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
      balance: true,
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
  const result = await prisma.account.groupBy({
    by: ["client"],
    _sum: {
      balance: true,
    },
    orderBy: [
      {
        _sum: {
          balance: "desc",
        },
      },
    ],
    take: 1,
  });

  // console.log("---", result);

  return await prisma.client.findUnique({
    where: { id: result[0].client },
  });
}
