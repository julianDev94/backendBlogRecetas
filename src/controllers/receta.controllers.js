import Receta from "../database/model/receta.js";

export const listaRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find({});
    res.status(200).json(recetas);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "No se encontraron recetas",
    });
  }
};

export const obtenerUnaReceta = async (req, res) => {
  try {
    const recetaEncontrada = await Receta.findById(req.params.id);
    res.status(200).json(recetaEncontrada);
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensaje: "La receta buscada no existe" });
  }
};

export const crearReceta = async (req, res) => {
  try {
    const { titulo } = req.body;

    const recetaExistente = await Receta.findOne({ titulo });

    if (recetaExistente) {
      res
        .status(400)
        .json({
          mensaje:
            "Ya existe una receta con este titulo. Vuelva a ingresar una receta nueva",
        });
    }

    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({mensaje: 'Se ha creado con exito la receta',recetaNueva});
  } catch (error) {
    console.error(error);
    res.status(400).json({mensaje: 'Ops, ha ocurrido un problema intentalo nuevamente más tarde'});
  }
};

export const editarReceta = async(req,res)=>{
    try {
        const recetaEncontrada = await Receta.findById(req.params.id);
        if(!recetaEncontrada){
            res.status(400).json({mensaje: 'No se pudo modificar la receta'})
        }

        const recetaModificada = await Receta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: 'Receta modificada con exito', recetaModificada});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: 'No se pudo completar la modificacion de la receta, vuelva a intentarlo luego nuevamente'});
    }
}

export const eliminarUnaReceta = async (req, res)=>{
    try {
        const recetaEncontrada = await Receta.findById(req.params.id);
        if(!recetaEncontrada){
            res.status(404).json({mensaje: 'No se ha encontrado la receta buscada'})
        }

        const eliminarReceta = await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'La receta se ha eliminado con exito', eliminarReceta});
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'La receta no se pudo eliminar, intentelo nuevamente mas tarde'});
    }
}
