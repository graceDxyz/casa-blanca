import express, { Router } from "express";
import { getAllRoomHandler } from "../controllers/room.controller";
const router: Router = express.Router();

router.get("/", [], getAllRoomHandler);

export default router;
