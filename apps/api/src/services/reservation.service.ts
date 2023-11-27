import ReservationModel from "@/models/reservation.model";

export async function getAllReservation() {
  return ReservationModel.find();
}
