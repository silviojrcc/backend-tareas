import { Router } from "express";
import { obtenerTareas } from "../controllers/tareas.controller";

const router = Router();

router.route('/tareas').get(obtenerTareas);

export default router;

