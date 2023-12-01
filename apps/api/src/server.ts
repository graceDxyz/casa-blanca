import dotenv from "dotenv";
dotenv.config();

import { StrictAuthProp } from "@clerk/clerk-sdk-node";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import http from "http";
import logger from "logger";
import morgan from "morgan";
import { Server } from "socket.io";

import routes from "@/routes";

declare global {
  namespace Express {
    interface Request extends StrictAuthProp {}
  }
}

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.json())
    .use(
      cors({
        origin: [
          "http://192.168.254.125:5173",
          "http://localhost:5173",
          "https://casa-blanca-web.vercel.app",
        ],
        credentials: true,
      }),
    )
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  app.use("/api", routes);

  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    logger.error(err.stack);
    if (err.stack && err.stack.includes("Unauthenticated")) {
      res.status(401).send({ message: "Unauthenticated!" });
    } else {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  const server = http.createServer(app);

  const io = new Server(server);

  io.on("connection", (socket) => {
    logger.info(`+++++++++++ ${socket.id} connected`);

    socket.on("join-room", (roomId: string) => {
      logger.info(`joined ${roomId}`);
      // socket.emit('room-not-found', {
      //   message: "Oops! The Room ID you entered doesn't exist or hasn't been created yet.",
      // })
    });

    socket.on("disconnect", () => {
      logger.info(`+++++++++++ ${socket.id} disconnected`);
      socket.emit("disconnected");
    });
  });

  return server;
};
