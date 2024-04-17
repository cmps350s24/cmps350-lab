import { get } from "@/app/actions";
import Tasks from "@/app/components/tasks";

export default async function Home() {
  const tasks = await get();
  return <Tasks tasks={tasks} />;
  // return <Tasks />;
}
