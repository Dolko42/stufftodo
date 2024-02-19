import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "~/server/auth";

export default async function Todo() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  } else {
    return (
      <main className="p-4">
        <p>Add or select a list.</p>
      </main>
    );
  }
}
