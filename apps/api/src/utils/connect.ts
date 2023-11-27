import logger from "logger";
import mongoose from "mongoose";

import { env } from "@/env";

async function connect() {
  try {
    await mongoose.connect(env.DATABASE_URL, {
      dbName: "casa-blanca",
    });
    logger.info("DB connection established");
  } catch (error) {
    logger.info("Could not connect to db");
    logger.info(error);
    process.exit(1);
  }
}

export default connect;
