import clerkClient from "@clerk/clerk-sdk-node";
import type { Request, Response } from "express";

export async function getAllUserHandler(req: Request, res: Response) {
  const auth = req.auth;

  const user = await clerkClient.users.getUser(auth.userId);

  if (user.publicMetadata?.role !== "super_admin") {
    res.status(403).send({ message: "Unauthorized!" });
  }

  const users = await clerkClient.users.getUserList();

  return res.send(users);
}
