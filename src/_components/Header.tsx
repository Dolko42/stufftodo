import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const Header: React.FC = async () => {
  const session = await getServerAuthSession();

  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      <div className="flex gap-10">
        <Link href="/" className="font-bold text-gray-800">
          STUFFTODO
        </Link>
        <Link href="/todo" className="text-gray-800">
          Your stuff
        </Link>
      </div>
      <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
        <button
          className={
            session
              ? "btn btn-error btn-sm rounded-none text-white"
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
