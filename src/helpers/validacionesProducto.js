import {check} from 'express-validator';

export const validarRecetas = [
    check('titulo').notEmpty().withMessage("El titulo es obligatorio").trim().isLength({min: 4, max:50}).withMessage("El  titulo debe tener entre 4 y 50 caracteres"),
    check('categoria').notEmpty().withMessage("La categoria es obligatoria"),
    check('descripcionBreve').notEmpty().withMessage('La descripcion breve es obligatoria').trim().isLength({min: 4,max:300}).withMessage("La descripcion breve debe tener entre 4 y 300"),
    check('tiempoPrep').notEmpty().withMessage("El tiempo de preparacion es obligatorio").trim().isInt({min: 1, max: 500}).withMessage("El tiempo de preparación debe estar entre 1 y 500"),
    check('')


]