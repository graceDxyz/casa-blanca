import { getAllUserHandler } from "@/controllers/user.controller";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import express, { Router } from "express";
const router: Router = express.Router();

router.get("/", [ClerkExpressRequireAuth({})], getAllUserHandler);

export default router;
