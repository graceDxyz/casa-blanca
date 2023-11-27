import express, { Router } from "express";
import { getAllReservationHandler } from "../controllers/reservation.controller";
const router: Router = express.Router();

router.get("/", [], getAllReservationHandler);

export default router;
