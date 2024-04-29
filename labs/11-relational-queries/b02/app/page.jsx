import * as analytics from "@/repos/analytics";

export default async function Home() {
  const clients = await analytics.getClients();
  const averageBalance = await analytics.getAverageBalanceAvg();
  const minMaxBalanceAccount = await analytics.getAccountMinMax();
  const top3Accounts = await analytics.getAccountTop3();
  const transactionAccount = await analytics.getTransactionAccount(
    clients[0].accounts[0].id,
    new Date(Date.now() - 2 * 60 * 60 * 1000),
    new Date(Date.now() + 2 * 60 * 60 * 1000)
  );
  const topClient = await analytics.getClientTop();

  console.log(clients[0].accounts[0].id);

  return (
    <main>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {averageBalance.map((result) => (
              <tr key={result.type}>
                <td>Average Balance ({result.type})</td>
                <td>{result._avg.balance}</td>
              </tr>
            ))}

            {/* <tr>
              <td>Min Balance Account</td>
              <td>{minMaxBalanceAccount._min.balance}</td>
            </tr>
            <tr>
              <td>Max Balance Account</td>
              <td>{minMaxBalanceAccount._max.balance}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      {JSON.stringify(minMaxBalanceAccount)}
      {JSON.stringify(top3Accounts)}
      {JSON.stringify(transactionAccount)}
      {JSON.stringify(topClient)}
    </main>
  );
}
