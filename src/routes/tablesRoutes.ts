import { Router } from "express";
import { TablesController } from "@/controllers/tablesController";

const tablesRoutes = Router();
const tableController = new TablesController();

tablesRoutes.get("/", tableController.index);
// tablesRoutes.post("/", tableController.create);
// tablesRoutes.put("/:id", tableController.update);
// tablesRoutes.delete("/:id", tableController.remove);

export { tablesRoutes };
