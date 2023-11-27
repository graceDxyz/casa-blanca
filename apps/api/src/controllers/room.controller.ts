import { GetItemInput } from "@/schema/base.schema";
import { findRoom, getAllRoom } from "@/services/room.service";
import type { Request, Response } from "express";

export async function getAllRoomHandler(req: Request, res: Response) {
  // const auth = req.auth;
  // const user = await clerkClient.users.getUser(auth.userId);

  // console.log(user.privateMetadata.role);
  // if (user) {
  //   console.log(user);
  //   await clerkClient.users.updateUserMetadata(auth.userId, {
  //     publicMetadata: {
  //       role: "super_admin",
  //     },
  //   });
  // }

  const rooms = await getAllRoom();
  return res.send(rooms);
}

export async function getRoomHandler(
  req: Request<GetItemInput["params"]>,
  res: Response,
) {
  const id = req.params.id;
  const room = await findRoom({ _id: id });

  if (!room) {
    return res.sendStatus(404);
  }

  return res.send(room);
}
