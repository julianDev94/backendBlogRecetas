import { Router } from "express";
import { crearReceta, editarReceta, eliminarUnaReceta, listaRecetas, obtenerUnaReceta } from "../controllers/receta.controllers.js";
import validarRecetas from '../helpers/validacionesRecetas.js'

const router = Router();

router.route('/recetas').get(listaRecetas).post(validarRecetas,crearReceta);
router.route('/recetas/:id').get(obtenerUnaReceta).put(editarReceta).delete(eliminarUnaReceta);

export default router;