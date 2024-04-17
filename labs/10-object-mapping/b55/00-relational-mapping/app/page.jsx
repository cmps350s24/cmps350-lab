import User from "@/app/components/user";
import { add, get } from "@/app/actions";

export default async function Home() {
  let users = await get();

  async function callback() {
    "use server";
    // users = await get();
  }

  return (
    <main>
      <form className="flex gap-x-2" action={add}>
        <input className="rounded-lg border" name="name" />
        <input className="rounded-lg border" name="email" />
        <button type="submit">Add</button>
      </form>
      <div className="mt-6">
        {users.map((user) => (
          <User key={user.id} user={user} callback={callback} />
        ))}
      </div>
    </main>
  );
}
