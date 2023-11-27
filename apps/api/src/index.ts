import logger from "logger";

import { env } from "@/env";
import { createServer } from "@/server";
import connect from "@/utils/connect";

const port = env.PORT;
const server = createServer();

const app = server.listen(port, async (): void => {
  await connect();
  logger.info(`api running on ${port}`);
});

process.on("SIGTERM", () => {
  logger.info("SIGTERM signal received.");
  logger.info("Closing http server.");
  app.close((err) => {
    logger.info("Http server closed.");
    process.exit(err ? 1 : 0);
  });
});
