import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        trim: true,
        unique: true
    },
    categoria:{
        type: String,
        required: true,
        enum: ['Principal','Postre','Ensalada']
    },
    descripcionBreve: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 300,
        trim: true
    },
    tiempoPrep: {
        type: Number,
        required: true,
        min: 1,
        max: 500,
        trim: true
    },
    tiempoCoccion: {
        type: Number,
        required: true,
        min: 1,
        max: 500,
        trim:true
    },
    porciones: {
        type: Number,
        required: true,
        min: 1,
        max: 20,
        trim:true
    },
    urlImagen:{
        type:String,
        validate: {
            validator: (datoUrl)=>{
                const regex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
                const urlValidada = regex.test(datoUrl);
                return urlValidada;
            },
            message: "La URL de la imagen no tiene el formato válido"
        },
        trim: true,
        required: true,
        unique: true
    },
    ingredientes: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true
    },
    pasos:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true
    }
});

const Receta = mongoose.model('receta', recetaSchema);
export default Receta;