"use client";

import { useState, useEffect } from "react";
import * as actions from "@/app/actions";

export default function Users({ users: _users }) {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   setUsers(_users);
  //   return () => {};
  // }, [_users]);

  const [users, setUsers] = useState(_users);
  const [stale, setStale] = useState(false);
  useEffect(() => {
    if (stale) {
      actions.get().then((data) => {
        setUsers(data);
      });
      setStale(false);
    }
    return () => {};
  }, [stale]);

  async function callback() {
    // refetch data
    setStale(true);
  }

  return (
    <main className="grid grid-cols-1 gap-2">
      <form className="flex gap-2" action={actions.create} onSubmit={callback}>
        <input className="border rounded" name="name" required />
        <input className="border rounded" name="email" required />
        <button>Add</button>
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <div className="flex gap-x-3 justify-between">
            <div>
              <span className="font-medium">{user.name}</span>{" "}
              <span className="font-mono">{user.email}</span>
            </div>
            <form action={actions.remove} onSubmit={callback}>
              <input hidden name="id" value={user.id} readOnly />
              <button className="text-xs border bg-red-500 rounded px-2 py-1 text-white">
                Delete
              </button>
            </form>
          </div>
          <div className="flex flex-wrap text-xs gap-2">
            {user.posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}

function Post({ post }) {
  return <div>{post.title}</div>;
}
