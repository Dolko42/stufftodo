"use server";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import type { z } from "zod";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";
import { CreateStuffSchema } from "~/types";

type Inputs = z.infer<typeof CreateStuffSchema>;

export const createStuff = async (data: Inputs) => {
  const session = await getServerSession(authOptions);
  CreateStuffSchema.safeParse(data);

  if (session && session.user) {
    await db.stuff.create({
      data: {
        title: data.content,
        listId: data.id,
        creatorId: session.user.id,
      },
    });
  }

  revalidatePath("/todo");
};

export const deleteStuff = async (id: string) => {
  const session = await getServerSession(authOptions);
  const stuff = await db.stuff.findFirst({
    where: { id: id },
  });

  if (session && session.user && stuff) {
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
