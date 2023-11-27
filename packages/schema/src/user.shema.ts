import * as z from "zod";

export const userPrivateMetadataSchema = z.object({
  role: z.enum(["user", "admin", "super_admin"]),
});

export type UserRole = z.infer<typeof userPrivateMetadataSchema.shape.role>;
