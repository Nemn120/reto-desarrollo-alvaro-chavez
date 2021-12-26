import {Service} from "typedi";
import { Movie } from "../model/Movie";
import MovieSchema  from "../model/MovieSchema";

@Service()
export class MovieRepository {

    public async find(name: String, year? : String){
        console.log(name);
        console.log(year);
        if(!year)
            return await MovieSchema.findOne({Title:name})
        return await MovieSchema.findOne({Title: name, Year : year.toString()});
    }

    public async findAll(pagina?: number){
        const page : number = pagina ? pagina : 1;
        const itemsPerPage : number = 5;
        let pagination : number = 0;
        if (page > 1) {
            pagination += ((page - 1) * itemsPerPage);
        }
        const [total,data] = await Promise.all([
            MovieSchema.countDocuments(),
            MovieSchema.find().skip(pagination).limit(itemsPerPage)]);
        return await {
            data,
            page,
            totalPages : Math.ceil(total/itemsPerPage),
            total
        }
    }

    public async updatePlot(movie: Movie){
        return await MovieSchema.updateOne({Title:movie.Title},{Plot:movie.Plot}, {new: true});
    }

}