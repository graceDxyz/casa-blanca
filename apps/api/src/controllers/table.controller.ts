import { Request, Response } from "express";

import { getAllTable } from "@/services/table.service";

const getAllTableHandler = async (req: Request, res: Response) => {
  const tables = await getAllTable();
  return res.send(tables);
};

export { getAllTableHandler };
