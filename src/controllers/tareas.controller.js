import Tarea from "../models/tarea"

export const obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Error al buscar las tareas"
        });
    }
}

export const crearTarea = async (req, res) => {
    try {

    } catch (err) {

    }
}