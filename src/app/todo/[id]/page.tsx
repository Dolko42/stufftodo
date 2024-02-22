import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import Board from "~/_components/Board";
import { db } from "~/server/db";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  noStore();

  const query = searchParams?.query ?? "";
  const currentList = await db.stufflist.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!currentList) {
    return (
      <div className="flex h-full flex-col items-center justify-between bg-zinc-800 p-4">
        <p>Add or select list</p>
      </div>
    );
  }

  const stuffs = await db.stuff.findMany({
    where: {
      listId: currentList.id,
      ...(query && {
        title: {
          contains: query,
          mode: "insensitive",
        },
      }),
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <Board currentList={currentList} stuffs={stuffs} />;
}
