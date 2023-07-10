import Tarea from "../models/tarea"

export const obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'Error al buscar las tareas',
        });
    }
}

export const obtenerTarea = async (req, res) => {
    try {
        const tareas = await Tarea.findById(req.params.id);
        res.status(200).json(tareas);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'Error al buscar las tareas',
        });
    }
}

export const crearTarea = async (req, res) => {
    try {
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            message: 'La tarea se creó correctamente',
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'Error al crear la tarea',
        });
    }
}

export const eliminarTarea = async (req, res) => {
    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'La tarea fué eliminada correctamente',
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'Error al eliminar la tarea',
        });
    }
}