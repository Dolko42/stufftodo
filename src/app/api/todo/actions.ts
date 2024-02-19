"use server";

// import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

export async function createStufflist() {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    try {
      await db.stufflist.create({
        data: {
          authorId: session?.user.id,
        },
      });
    } catch (error) {
      console.log(error);
      return null;
    }

    revalidatePath("/todo");
  }
}

export async function updateStufflist(formData: FormData) {
  const session = await getServerSession(authOptions);
  const title = formData.get("title") as string;
  const id = formData.get("id") as string;

  if (session && session.user) {
    try {
      await db.stufflist.update({
        where: {
          id: id,
        },
        data: {
          title: title,
        },
      });

      revalidatePath("/todo");
    } catch {}
  }
}

export async function deleteStufflist(id: string) {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    try {
      await db.stuff.deleteMany({
        where: { listId: id },
      });
      await db.stufflist.delete({
        where: {
          id: id,
        },
      });

      revalidatePath("/todo");
    } catch {}
  }
}
