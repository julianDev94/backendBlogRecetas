import Usuario from "../database/model/usuario.js"

export const login = async(req,res)=>{
    try {
        const {usuario, pass} = req.body
        const usuarioEncontrado = await Usuario.findOne({usuario});
        if(!usuarioEncontrado){
            res.status(404).json({mensaje: 'El usuario no se encuentra registado'});
        }


    } catch (error) {
        
    }
}