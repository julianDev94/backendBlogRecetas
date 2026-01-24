import { Schema } from "mongoose";

const usuarioSchema = new Schema({
    usuario:{
        type: String,
        trim: true,
        required: true,
        minLength: 4,
        maxLength: 9
    },
    password: {
        type: String,
        validate: {
            validator: function(pass){
                const expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{4,9}$/;
                return expresion.test(pass);
            }
        },
        required: true
    }
})

const Usuario = mongoose.model('usuario',usuarioSchema);
export default Usuario;