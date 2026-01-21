import { Schema } from "mongoose";

const recetaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        trim: true
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
    
    }
})