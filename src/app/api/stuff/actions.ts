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

export const editStuff = async (
  id: string,
  title: string,
  description: string | undefined,
  deadline: string | null | undefined,
) => {
  const session = await getServerSession(authOptions);
  const stuff = await db.stuff.findFirst({
    where: { id: id },
  });

  if (session && session.user && stuff) {
    const updatePayload: {
      title: string;
      description?: string;
      deadline?: Date | null;
    } = {
      title,
    };

    if (description !== undefined && description !== null) {
      updatePayload.description = description;
    }

    // Check if deadline is not undefined and not null
    if (deadline !== undefined && deadline !== null) {
      updatePayload.deadline = deadline ? new Date(deadline) : null;
    }

    await db.stuff.update({
      data: updatePayload,
      where: {
        id: stuff.id,
      },
    });
  }

  revalidatePath("/todo");
};
