import {Service} from "typedi";
import { Movie } from "../model/Movie";
import { MovieReplaceDTO} from "../model/MovieReplaceDTO";
import { MovieRepository } from "../repository/MovieRepository";

@Service()
export class MovieService {

    constructor(private movieRepository: MovieRepository) {
    }

    public  async find(movie:String, year: String){
        return await this.movieRepository.find(movie,year);
    }

    public async findAll(pagina?:number){
        return await this.movieRepository.findAll(pagina);
    }

    public async replace(movieReplace : MovieReplaceDTO){
        const data : Movie =  await this.movieRepository.find(movieReplace.movie);
        if(!data){
            throw new Error("Pelicula a modificar no existe");
        }
        data.Plot =data.Plot.replace(movieReplace.find,movieReplace.replace);
        this.movieRepository.updatePlot(data);
        return data.Plot;
    }
}