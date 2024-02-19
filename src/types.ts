import { z } from "zod";

export type Stufflist = {
  id: string;
  title: string;
  icon: string | null;
  authorId: string;
};

export type Stuff = {
  id: string;
  title: string;
  description: string | null;
  status: boolean;
  important: boolean;
  createdAt: Date;
  creatorId: string;
  listId: string;
};

export const CreateStuffSchema = z.object({
  id: z.string(),
  content: z
    .string()
    .min(1, "You gotta type something")
    .max(100, "Keep it a 100 cowboy"),
});
