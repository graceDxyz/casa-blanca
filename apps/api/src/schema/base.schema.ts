import * as z from "zod";

export const params = z.object({
  id: z.string({
    required_error: "id is required",
  }),
});

export const getItemSchema = z.object({ params });

export type GetItemInput = z.TypeOf<typeof getItemSchema>;
