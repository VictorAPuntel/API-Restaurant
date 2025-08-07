import { Router } from "express";
import { TablesSessionsController } from "@/controllers/tablesSessionsController";

const tablesSessionsRoutes = Router();
const tableSessionsController = new TablesSessionsController();

tablesSessionsRoutes.post("/", tableSessionsController.create);
// tablesRoutes.post("/", tableController.create);
// tablesRoutes.put("/:id", tableController.update);
// tablesRoutes.delete("/:id", tableController.remove);

export { tablesSessionsRoutes };
