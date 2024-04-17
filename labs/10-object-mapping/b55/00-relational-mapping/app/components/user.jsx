"use client";

// import { useRouter } from "next/navigation";
import { remove } from "@/app/actions";

export default function User({ user, callback }) {
  // const router = useRouter();

  async function removeUser() {
    // await fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify({id: user.id})
    // })

    const removeWithId = remove.bind(null, user.id);
    await removeWithId();
    callback();
    // router.reload();
    window.location.reload();
  }

  return (
    <div className="mb-4">
      <div className="flex gap-x-4 justify-between">
        <p>
          <span className="font-medium">{user.name}</span>{" "}
          <span className="font-mono text-sm">{user.email}</span>
        </p>
        <button className="text-red-500" onClick={removeUser}>
          Delete
        </button>
      </div>
      <div className="text-xs flex flex-wrap gap-x-2 gap-y-1">
        {user.posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}
