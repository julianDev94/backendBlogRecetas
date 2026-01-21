import Receta from "../database/model/receta.js";

export const listaRecetas = async (req, res)=>{
    try {
        const recetas = await Receta.find({});
        res.status(200).json(recetas);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            mensaje: 'No se encontraron recetas'
        })
    }
};

