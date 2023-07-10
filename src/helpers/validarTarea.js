import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTarea = [
    check('tarea')
        .notEmpty()
        .withMessage('La tarea es obligatoria')
        .isLength({min: 2, max: 100})
        .withMessage('La tarea debe contener entre 2 y 100 caracteres'),
    check('completada')
        .isBoolean()
        .withMessage('Completada debe ser un booleano'),
    (req, res, next) => { resultadoValidacion(req, res, next) }
];

export default validarTarea;