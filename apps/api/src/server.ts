import dotenv from "dotenv";
dotenv.config();

import {
  ClerkExpressRequireAuth,
  ClerkExpressWithAuth,
  RequireAuthProp,
  StrictAuthProp,
  WithAuthProp,
} from "@clerk/clerk-sdk-node";
import cors from "cors";
import express, { Request, Response, type Express } from "express";
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
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    })
    .get(
      "/api/unprotected-route",
      ClerkExpressWithAuth({}),
      (req: WithAuthProp<Request>, res: Response) => {
        res.json(req.auth);
      },
    )
    .get(
      "/api/protected-route",
      ClerkExpressRequireAuth({}),
      (req: RequireAuthProp<Request>, res: Response) => {
        console.log(req.auth);
        res.json(req.auth);
      },
    );

  app.use("/api", routes);

  // @ts-ignore
  app.use((err, req, res, next) => {
    console.error(err.stack);
  });

  return app;
};
