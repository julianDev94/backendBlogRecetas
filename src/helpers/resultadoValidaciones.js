import { validationResult } from "express-validator";

const resultadoValidaciones = (req,res,next) =>{
    const resultado = validationResult(req);
    if(!resultado.isEmpty()){
        res.status(400).json({errors: resultado.array()})
    }
    next();
}

export default resultadoValidaciones;