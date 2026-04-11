import { data } from "../../services/api.js";
import { universalCard } from "../Card/Card.js";
import { universalDiv } from "../Div/Div.js";


export function moviesDisplay() {

    
    
    const allMovies = universalDiv();
    allMovies.className = 'all-movies';
    

    
    return allMovies
}