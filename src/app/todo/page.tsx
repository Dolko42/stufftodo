import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "~/server/auth";

export default async function Todo() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  } else {
    return (
      <div className="flex h-full flex-col items-center justify-between bg-zinc-800 p-4">
        <p>Add or select list</p>
      </div>
    );
  }
}
