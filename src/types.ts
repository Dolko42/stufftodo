import { z } from "zod";

export type StufflistWithCount = {
  id: string;
  title: string;
  icon: string | null;
  authorId: string;
  _count: {
    tasks: number;
  };
}[];

export const CreateStuffSchema = z.object({
  id: z.string(),
  content: z
    .string()
    .min(1, "You gotta type something")
    .max(100, "Keep it a 100 cowboy"),
});

export const EditStuffSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(1, "At leaast 1 character")
    .max(100, "Keep it a 100 cowboy"),
  description: z.string().max(200, "200 max").optional(),
  deadline: z
    .string()
    .optional()
    .refine(
      (val) => val === undefined || val === "" || !isNaN(Date.parse(val)),
      {
        message: "Invalid date format",
      },
    ),
});
