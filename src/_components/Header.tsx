import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const Header: React.FC = async () => {
  const session = await getServerAuthSession();

  return (
    <div>
      <p className="pb-4">
        {session && <span>Logged in as {session.user?.name}</span>}
      </p>
      <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
        <button className="mt-8 rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20">
          {session ? "Sign out" : "Sign in"}
        </button>
      </Link>
    </div>
  );
};
export default Header;
