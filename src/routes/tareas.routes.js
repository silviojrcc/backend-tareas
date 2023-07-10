import { Router } from "express";
import { crearTarea, eliminarTarea, obtenerTarea, obtenerTareas } from "../controllers/tareas.controller";

const router = Router();

router.route('/tareas').get(obtenerTareas).post(crearTarea);

router.route('/tareas/:id').get(obtenerTarea).delete(eliminarTarea);

export default router;

