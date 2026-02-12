import {check} from 'express-validator';
import resultadoValidaciones from './resultadoValidaciones.js';
const validarRecetas = [
    check('titulo').notEmpty().withMessage("El titulo es obligatorio").trim().isLength({min: 4, max:50}).withMessage("El  titulo debe tener entre 4 y 50 caracteres"),
    check('categoria').notEmpty().withMessage("La categoria es obligatoria"),
    check('descripcionBreve').notEmpty().withMessage('La descripcion breve es obligatoria').trim().isLength({min: 4,max:300}).withMessage("La descripcion breve debe tener entre 4 y 300"),
    check('tiempoPrep').notEmpty().withMessage("El tiempo de preparacion es obligatorio").trim().isInt({min: 1, max: 500}).withMessage("El tiempo de preparación debe estar entre 1 y 500 minutos"),
    check('tiempoCoccion').notEmpty().withMessage("El tiempo de coccion es obligatorio").trim().isInt({min: 1, max:500}).withMessage("El tiempo de cocción debe estar entre 1 y 500 minutos"),
    check('porciones').notEmpty().withMessage("Las porciones son obligatorias").trim().isInt({min: 1, max:20}).withMessage("La cantidad de porciones debe estar entre 1 y 20"),
    check('urlImagen').notEmpty().withMessage("La url de la imagen es obligatoria").trim().isURL().withMessage("La URL de la imagen es invalida"),
    check('ingredientes').isArray({min: 1}).withMessage("Debe existir al menos un ingrediente"),
    check('ingredientes.*').trim().isLength({min: 3, max:50}).withMessage("El ingrediente debe tener entre 3 y 50 caracteres"),
    check('pasos').isArray({min: 1}).withMessage('Debe existir al menos 1 paso'),
    check('pasos.*').trim().isLength({min: 3, max: 50}).withMessage("Los pasos tiene entre 3 y 50 caracteres"),
    (req,res,next)=>{
        resultadoValidaciones(req,res,next);
    }
];

export default validarRecetas;