import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const stuffRouter = createTRPCRouter({
  //TODO: Create Stuff
  //TODO: Update Stuff title
  //TODO: Update Stuff desc
  //TODO: Update Stuff status
  //TODO: Update Stuff important
  //TODO: Delete Stuff
  /////////////////////
  //TODO: Fetch this stufflist's stuff
  // OR
  //TODO: Fetch this stufflist's uncompleted stuff
  //TODO: Fetch this stufflist's completed stuff
});
