import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import ListTabInput from "./_components/ListTabInput";
import NewListButton from "./_components/NewListButton";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  return (
    <main>
      <div>
        <div className="flex flex-col items-start">
          <p className="pb-4">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <ListTabInput />
          <NewListButton />
          <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
            <button className="mt-8 rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20">
              {session ? "Sign out" : "Sign in"}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
