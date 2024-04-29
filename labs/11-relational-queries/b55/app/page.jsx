import * as stats from "@/repos/stats";

export default async function Home() {
  const clients = await stats.getClients();
  const averageBalance = await stats.getAccountBalanceAvg();
  const accountMinMax = await stats.getAccountMinMax();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.firstName + " " + client.lastName}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        <li>Average balance: {averageBalance._avg.balance}</li>
        <li>Account with min balance: {accountMinMax.min.id}</li>
        <li>Account with max balance: {accountMinMax.max.id}</li>
      </ul>
    </div>
  );
}
