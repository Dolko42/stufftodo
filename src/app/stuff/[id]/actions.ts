// "use server";
// import { revalidatePath } from "next/cache";
// import { getServerAuthSession } from "~/server/auth";
// import { db } from "~/server/db";

// const session = await getServerAuthSession();

// export const createStuff = async (formData: FormData) => {
//   const content = formData.get("content");

//   if (session && session.user) {
//     await db.stuff.create({
//       data: {
//         title: content as string,
//       },
//     });
//   }

//   revalidatePath("/");
// };
