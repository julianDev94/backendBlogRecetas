import { Router } from "express";
import { crearReceta, editarReceta, eliminarUnaReceta, listaRecetas, obtenerUnaReceta } from "../controllers/receta.controllers.js";

const router = Router();

router.route('/recetas').get(listaRecetas).post(crearReceta);
router.route('/receta/:id').get(obtenerUnaReceta).put(editarReceta).delete(eliminarUnaReceta);

export default router;