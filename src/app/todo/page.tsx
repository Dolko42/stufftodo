import { unstable_noStore as noStore } from "next/cache";

export default async function Todo() {
  noStore();

  return (
    <main>
      <p>Todo</p>
    </main>
  );
}
