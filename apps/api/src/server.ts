import dotenv from "dotenv";
dotenv.config();

import { StrictAuthProp } from "@clerk/clerk-sdk-node";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import logger from "logger";
import morgan from "morgan";

import routes from "@/routes";

declare global {
  namespace Express {
    interface Request extends StrictAuthProp {}
  }
}

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.json())
    .use(
      cors({
        origin: ["http://192.168.254.125:5173", "http://localhost:5173"],
        credentials: true,
      }),
    )
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  app.use("/api", routes);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.stack && err.stack.includes("Unauthenticated")) {
      res.status(401).send({ message: "Unauthenticated!" });
    } else {
      logger.error(err.stack);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  return app;
};
