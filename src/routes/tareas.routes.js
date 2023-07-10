import { Router } from "express";
import { crearTarea, editarTarea, eliminarTarea, obtenerTarea, obtenerTareas } from "../controllers/tareas.controller";

const router = Router();

router.route('/tareas').get(obtenerTareas).post(crearTarea);

router.route('/tareas/:id').get(obtenerTarea).delete(eliminarTarea).put(editarTarea);

export default router;

