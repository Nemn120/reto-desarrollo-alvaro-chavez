import { model, Schema } from "mongoose"
import { Movie } from "./Movie"

const MovieSchema  = new Schema({

    Title : { type: String, required : true},
    Year : { type: String, required : true},
    Genre: { type: String, required : true},
    Director: { type: String, required : true},
    Actors: { type: String, required : true},
    Plot: { type: String, required : true},
    Ratings:[{
        Source : {type: String},
        Value :  {type: String}
        }]
})

export default model('movie',MovieSchema)
