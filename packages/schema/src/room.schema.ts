import * as z from "zod";

export const roomSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export const roomsSchema = z.array(roomSchema);

export type Rooms = z.infer<typeof roomsSchema>;
export type Room = z.infer<typeof roomSchema>;
