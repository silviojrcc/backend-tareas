import { Router } from "express";
import { crearTarea, editarTarea, eliminarTarea, obtenerTarea, obtenerTareas } from "../controllers/tareas.controller";
import validarTarea from "../helpers/validarTarea";

const router = Router();

router.route('/tareas')
    .get(obtenerTareas)
    .post(validarTarea, crearTarea);

router.route('/tareas/:id')
    .get(obtenerTarea)
    .delete(eliminarTarea)
    .put(validarTarea, editarTarea);

export default router;

