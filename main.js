import { data } from "./services/api.js";
import { universalCard } from "./components/Card/Card.js";
import { search } from "./components/Search/Search.js";


const imageBaseUrl = "https://image.tmdb.org/t/p/w500"



const app = document.getElementById('app');








async function moviesData() {

    const movies = await data();
    console.log(movies)
    moviesRender(movies)
    
}



moviesData();


//render movies data
function moviesRender(movies) {

    movies.forEach(element => {
        const description = moviesDescription(element.overview)
        app.appendChild(universalCard(imageBaseUrl+element.poster_path, element.original_title, description))
    }) 

}


function moviesDescription(text, wordLimit = 9) {
    let word = text.split(" ")
    if(word.length > wordLimit) {
        word = word.slice(0, wordLimit).join(" ") + "...";
    }else {
        word = text;
    }

    return word;
}