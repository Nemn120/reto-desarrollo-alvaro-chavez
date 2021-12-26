import { Rating } from "./Rating";

export interface Movie {
    Title : string;
    Year : String;
    Released: String;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Ratings: Rating[]

}