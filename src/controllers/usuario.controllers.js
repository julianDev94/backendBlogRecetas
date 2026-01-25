import Usuario from "../database/model/usuario.js"
import bcrypt from 'bcrypt';

export const login = async(req,res)=>{
    try {
        const {usuario, pass} = req.body
        const usuarioEncontrado = await Usuario.findOne({usuario});
        if(!usuarioEncontrado){
            res.status(404).json({mensaje: 'Usuario o contraseña invalidos'});
        }

        const passValidado = bcrypt.compareSync(pass, usuarioEncontrado.password);
        if(!passValidado){
            res.status(400).json({mensaje: 'Usuario o contraseña invalidos!'})
        }

        res.status(200).json({mensaje: 'Los datos ingresados son correctos', usuarioEncontrado});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: 'Error al intentar loguear al usuario'});
    }
}