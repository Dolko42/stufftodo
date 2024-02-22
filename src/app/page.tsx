import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
export default async function Home() {
  noStore();

  return (
    <main className="relative flex h-full min-h-[40rem] flex-col bg-zinc-800 p-4">
      <h1 className="pb-6 text-3xl text-white">
        Welcome. You got stuff to do.
      </h1>
      <Link href="/todo">
        <button className="btn btn-lg w-full rounded-none bg-lime-500 text-zinc-800 hover:bg-lime-400 lg:w-auto">
          Get started {`->`}
        </button>
      </Link>
    </main>
  );
}
