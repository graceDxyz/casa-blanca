import express, { Router } from "express";
import { getAllTableHandler } from "../controllers/table.controller";
const router: Router = express.Router();

router.get("/", [], getAllTableHandler);

export default router;
