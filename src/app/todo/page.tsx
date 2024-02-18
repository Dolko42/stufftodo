import { unstable_noStore as noStore } from "next/cache";

export default async function Todo() {
  noStore();

  return (
    <main className="p-4">
      <p>Add or select a list.</p>
    </main>
  );
}
