import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default async function Home() {
  noStore();

  return (
    <main className="p-4">
      <h1 className="pb-4 text-3xl text-white">
        Welcome. You got stuff to do.
      </h1>
      <Link href="/todo">
        <button className="btn btn-accent btn-lg">Get started {`->`}</button>
      </Link>
    </main>
  );
}
