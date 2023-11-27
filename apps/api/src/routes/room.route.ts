import validateResource from "@/middlewares/validateResource";
import { getItemSchema } from "@/schema/base.schema";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import express, { Router } from "express";
import {
  getAllRoomHandler,
  getRoomHandler,
} from "../controllers/room.controller";
const router: Router = express.Router();

router.get("/", [ClerkExpressRequireAuth({})], getAllRoomHandler);
router.get(
  "/:id",
  [ClerkExpressRequireAuth({}), validateResource(getItemSchema)],
  getRoomHandler,
);

export default router;
