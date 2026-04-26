import { search } from "./components/Search/Search.js";
import { moviesDisplay } from "./components/MoviesContainer/MovieDisplay.js";
import { data } from "./services/api.js";
import { universalCard } from "./components/Card/Card.js";
import { changer } from "./components/Changer/Changer.js";
import { dataSearch } from "./services/searchApi.js";





let totalPages = 0;
const app = document.getElementById('app');
const container = moviesDisplay();
let page = 1;




app.appendChild(search({giveValue:takeValue}))
app.appendChild(container)






let changerContainer;


const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

//taking data
async function moviesData(page) {
    const movies = await data(page);   
    const allMovies = movies; 
    moviesRender(allMovies.results); 

    const allPages = pegination(allMovies.total_pages);
    
    if(changerContainer) {
        changerContainer.remove();
    }
    
    changerContainer = changer(allPages, changePage);
    app.appendChild(changerContainer) 
   
    
   
    
}
    
    
    
moviesData(page);


//render movies data
function moviesRender(movies) {
    container.innerHTML = "";
    movies.forEach(element => {
        const description = moviesDescription(element.overview)
        container.appendChild(universalCard(imageBaseUrl+element.poster_path, element.original_title, description, element.id, page))
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


function takeValue(value) {
    if(value) {
        async function moviesDataNew() {
        const movies = await dataSearch(value);
        const allMovies = movies.results; 
        const filterData = allMovies.filter(movie => movie.original_title.toLowerCase().includes(value.toLowerCase()))    
        moviesRender(filterData); 
    
}

    moviesDataNew();
    }else {
        moviesData();
    }
}

function pegination(arr) {
    const allPages = Array.from({ length: arr }, (_, i) => i + 1);
    return allPages; 

}

function changePage(num) {
    page = num;
    moviesData(page)
}