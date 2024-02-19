"use server";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

export const createStuff = async (formData: FormData) => {
  const session = await getServerSession(authOptions);
  const content = formData.get("content") as string;
  const id = formData.get("id") as string;

  if (session && session.user) {
    await db.stuff.create({
      data: {
        title: content,
        listId: id,
        creatorId: session.user.id,
      },
    });
  }

  revalidatePath("/todo");
};

export const deleteStuff = async (formData: FormData) => {
  const session = await getServerSession(authOptions);
  const id = formData.get("id") as string;

  if (session && session.user) {
    await db.stuff.delete({
      where: {
        id: id,
      },
    });
  }

  revalidatePath("/todo");
};

export const toggleStuff = async (id: string) => {
  const session = await getServerSession(authOptions);
  const stuff = await db.stuff.findFirst({
    where: { id: id },
  });

  if (session && session.user && stuff) {
    await db.stuff.update({
      data: {
        status: !stuff?.status,
      },
      where: {
        id: stuff.id,
      },
    });
  }

  revalidatePath("/todo");
};
