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

  return <Board query={query} currentList={currentList} />;
}
