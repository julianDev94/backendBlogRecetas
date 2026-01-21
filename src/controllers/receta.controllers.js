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
