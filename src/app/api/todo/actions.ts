"use server";

// import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

export async function createStufflist() {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    await db.stufflist.create({
      data: {
        authorId: session?.user.id,
      },
    });
  }

  revalidatePath("/todo");
}

export async function updateStufflist(formData: FormData) {
  const title = formData.get("title") as string;
  const id = formData.get("id") as string;

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

export async function deleteStufflist(formData: FormData) {
  const id = formData.get("id") as string;

  try {
    await db.stufflist.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/todo");
  } catch {}
}

// export const deleteStufflist = async () => {
//   const session = await getServerSession(authOptions);

//   if (session && session.user) {
//     await db.stufflist.delete({
//       where: { id:  }
//     })
//   }

//   revalidatePath("/todo");
// };

// export const getStufflists = async (
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) => {
//   const session = await getServerSession(req, res, authOptions);

//   if (!session || !session.user) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   const { id } = req.query;

//   if (req.method === "GET") {
//     try {
//       const stufflist = await db.stufflist.findUnique({
//         where: { id: id as string },
//       });

//       if (!stufflist) {
//         return res.status(404).json({ message: "Stufflist not found" });
//       }

//       // Optionally, check if the stufflist belongs to the logged-in user
//       if (stufflist.authorId !== session.user.id) {
//         return res.status(403).json({ message: "Forbidden" });
//       }

//       res.status(200).json(stufflist);
//     } catch (error) {
//       res.status(500).json({ message: "Server error" });
//     }
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// };
