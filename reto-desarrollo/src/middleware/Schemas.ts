import Joi = require("joi");

export const schemas = {
    params : Joi.object().keys({
        pelicula: Joi.string().min(5).required()
    }),
    body : Joi.object().keys({
        movie: Joi.string().required(),
        find : Joi.string().required(),
        replace : Joi.string().required()
    })
}
