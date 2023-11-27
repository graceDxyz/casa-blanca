import mongoose from "mongoose";
import { ITable } from "./table.model";

export interface ReservationInput {
  table: ITable["_id"];
  reservationDateTime: Date;
  guestCount: number;
  specialRequests?: string;
  status: string;
}

export interface IReservation extends ReservationInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const reservationSchema = new mongoose.Schema(
  {
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },
    reservationDateTime: {
      type: Date,
      required: true,
    },
    guestCount: {
      type: Number,
      required: true,
    },
    specialRequests: {
      type: String,
    },
    status: {
      type: String,
      enum: ["confirmed", "cancelled"],
      default: "confirmed",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
    },
  },
);

const ReservationModel = mongoose.model<IReservation>(
  "Reservation",
  reservationSchema,
);

export default ReservationModel;
