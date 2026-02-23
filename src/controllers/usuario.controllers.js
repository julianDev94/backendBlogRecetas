import Usuario from "../database/model/usuario.js"
import bcrypt from 'bcrypt';

export const login = async(req,res)=>{
    try {
        const {usuario, contrasenia} = req.body
        const usuarioEncontrado = await Usuario.findOne({usuario});
        if(!usuarioEncontrado){
            res.status(404).json({mensaje: 'Usuario o contraseña invalidos'});
        }

        const passValidado = bcrypt.compareSync(contrasenia, usuarioEncontrado.contrasenia);
        if(!passValidado){
            res.status(400).json({mensaje: 'Usuario o contraseña invalidos!'})
        }

        res.status(200).json({mensaje: 'Los datos ingresados son correctos', usuarioEncontrado});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: 'Error al intentar loguear al usuario'});
    }
}

export const crearUsuario = async (req,res) =>{
    try {
        const {usuario, contrasenia} = req.body;
        console.log({usuario,contrasenia});
        const usuarioEncontrado = await Usuario.findOne({usuario});
        if(usuarioEncontrado){
            res.status(200).json({mensaje: 'El usuario ingresado ya existe, vuelva a ingresar otro nuevamente'});
        }

        const saltos = bcrypt.genSaltSync(10);
        const passEncriptada = bcrypt.hashSync(contrasenia,saltos );
        const usuarioNuevo = new Usuario(req.body);
        usuarioNuevo.contrasenia = passEncriptada;
        await usuarioNuevo.save();
        res.status(201).json({mensaje: 'El usuario fue creado con exito!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: 'No se pudo completar la solicitud, vuelva a intentarlo en otro momento'});
    }
}