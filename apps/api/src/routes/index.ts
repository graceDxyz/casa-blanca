import express, { Request, Response, Router } from "express";

import reservationRoute from "@/routes/reservation.route";
import roomRoute from "@/routes/room.route";
import tableRoute from "@/routes/table.route";
import userRouter from "@/routes/user.route";

const router: Router = express.Router();

router.get("/health", (_req: Request, res: Response) => {
  res.status(200).send(".");
});

router.use("/reservations", reservationRoute);
router.use("/rooms", roomRoute);
router.use("/tables", tableRoute);
router.use("/users", userRouter);

export default router;
