import Users from "@/app/users";

import * as actions from "@/app/actions";

export default async function Home() {
  const users = await actions.get();
  return <Users users={users} />;
}
