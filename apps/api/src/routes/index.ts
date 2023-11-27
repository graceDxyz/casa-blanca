import express, { Request, Response, Router } from "express";
import reservationRoute from "./reservation.route";
import roomRoute from "./room.route";
import tableRoute from "./table.route";

const router: Router = express.Router();

router.get("/health", (_req: Request, res: Response) => {
  res.status(200).send(".");
});

router.use("/reservations", reservationRoute);
router.use("/rooms", roomRoute);
router.use("/tables", tableRoute);

export default router;
