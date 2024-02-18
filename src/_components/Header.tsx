import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const Header: React.FC = async () => {
  const session = await getServerAuthSession();

  return (
    <div className="flex h-12 items-center justify-between bg-zinc-900 px-4">
      <div className="flex gap-10">
        <Link href="/" className="font-bold text-zinc-200">
          STUFFTODO
        </Link>
      </div>
      <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
        <button
          className={
            session
              ? "btn btn-ghost btn-sm rounded-none text-zinc-200"
              : "btn btn-primary btn-sm rounded-none"
          }
        >
          {session ? "Sign out" : "Sign in"}
        </button>
      </Link>
    </div>
  );
};
export default Header;
