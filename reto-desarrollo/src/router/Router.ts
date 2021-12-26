import Router = require("koa-router");
import { findAll, getMovies, replace } from "../controller/MovieController";
import {middlewareValidationBody, middlewareValidationHeader, middlewareValidationParam}  from "../middleware/Middleware"; 
import {schemas}  from "../middleware/Schemas"; 


export const router  = new Router();


router.get("/movies/find/:pelicula",middlewareValidationParam(schemas.params),getMovies);
router.get("/movies/all",findAll);
router.post("/movies/replace",middlewareValidationBody(schemas.body), replace);