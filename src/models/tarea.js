import { Schema, model } from 'mongoose';

const tareaSchema = new Schema({
    tarea: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true,
    },
    completada: {
        type: Boolean,
        default: false
    }
});

const Tarea = model('tarea', tareaSchema);

export default Tarea;