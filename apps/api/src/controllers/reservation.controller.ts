import { Request, Response } from "express";

import { getAllReservation } from "@/services/reservation.service";

const getAllReservationHandler = async (req: Request, res: Response) => {
  const reservations = await getAllReservation();
  return res.send(reservations);
};

export { getAllReservationHandler };
