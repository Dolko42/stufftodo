import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const stufflistRouter = createTRPCRouter({
  //TODO: Create Stufflist
  createStufflist: protectedProcedure.mutation(async ({ ctx }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new Error("Unauthorized");
    }

    const newStufflist = await ctx.db.stufflist.create({
      data: {
        authorId: ctx.session.user.id,
      },
    });

    return newStufflist;
  }),

  //TODO: Update Stufflist (title)
  //TODO: Delete Stufflist
  //TODO: Fetch all user's stufflists
});
