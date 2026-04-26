import { search } from "./components/Search/Search.js";
import { moviesDisplay } from "./components/MoviesContainer/MovieDisplay.js";
import { data } from "./services/api.js";
import { universalCard } from "./components/Card/Card.js";
import { changer } from "./components/Changer/Changer.js";






const app = document.getElementById('app');
const container = moviesDisplay();
let page = 1;
let changeComponent = changer(page, changePage);


app.appendChild(search({giveValue:takeValue}))
app.appendChild(container)

//pegination
app.appendChild(changeComponent)






const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

//taking data
async function moviesData() {
    const movies = await data(page);   
    const allMovies = movies.results; 
    moviesRender(allMovies); 
   
    
}
    
    
    
moviesData();


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
        const movies = await data(page);
        const allMovies = movies.results; 
        const filterData = allMovies.filter(movie => movie.original_title.toLowerCase().includes(value.toLowerCase()))    
        moviesRender(filterData); 
    
}

    moviesDataNew();
    }else {
        moviesData();
    }
}



function changePage(e) {

    if(e.target.innerHTML === 'Next') {
        page = page + 1;
        
        
    }else {
        if(page !== 1) {
            page = page - 1;
            moviesData();
        }
        
    }
    update();
    moviesData();

}

function update() {
    changeComponent.remove();

    changeComponent = changer(page, changePage); 
    app.appendChild(changeComponent);
}

