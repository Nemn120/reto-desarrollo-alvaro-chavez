import Logger from "../config/Log";
import { MovieReplaceDTO } from "../model/MovieReplaceDTO";
import { MovieRepository } from "../repository/MovieRepository";
import { MovieService } from "../service/MovieService";

const movieRepository = new MovieRepository();
const movieService = new MovieService(movieRepository);

export const getMovies = async (ctx: any, next: any) => {
    Logger.info("Obtener pelicula por titulo y/o año");
    const response = await movieService.find(ctx.params.pelicula, ctx.request.headers['year']);
    ctx.status = 201;
    ctx.body = response;
    return next();
};

export const findAll = async (ctx: any, next: any) => {
    Logger.info("Listar peliculas con paginación");
    const page = ctx.request.headers['page']
    const response = await movieService.findAll(page);
    ctx.status = 201;
    ctx.body = response;
    return next();
};

export const replace = async (ctx: any, next: any) => {
    Logger.info("Remplazar campo Plot de una pelicula");
    const movieReplace: MovieReplaceDTO = ctx.request.body;
    try {
        const response = await movieService.replace(movieReplace);
        ctx.status = 201;
        console.log(response);
        ctx.body = {Plot: response};
        return next();
    } catch (error) {
        Logger.error(error);
        ctx.status = 500;
        ctx.body = { error };
        return next();
    }
};
