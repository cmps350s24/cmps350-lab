import * as stats from "@/repos/stats";

export default async function Home() {
  const clients = await stats.getClients();
  const accountBalanceAvg = await stats.getAccountBalanceAvg();
  return (
    <main>
      <table>
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
              <td className="font-mono">{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Average balance</td>
            {accountBalanceAvg._avg.balance}
          </tr>
        </tbody>
      </table>
    </main>
  );
}
