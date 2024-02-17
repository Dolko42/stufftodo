import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const stufflistRouter = createTRPCRouter({
  //TODO: Create Stufflist
  //TODO: Update Stufflist (title)
  //TODO: Delete Stufflist
  //TODO: Fetch all user's stufflists
});
