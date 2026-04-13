
import { data } from "./services/api.js";



const streamIt = "https://vidsrc-embed.ru/embed/movie";
const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
const pageNumber = params.get("page");


console.log(pageNumber)

const card = document.createElement('div');
card.className = 'card-div';
const leftDiv = document.createElement('div');
const rightDiv = document.createElement('div');
leftDiv.className = 'left-div';
rightDiv.className = 'right-div';

const watch = document.getElementById('watch');
watch.className = 'watch-movie';
const coverDiv = document.createElement('div');
coverDiv.className = 'cover-div';
watch.appendChild(coverDiv);

const streamMovie = document.createElement('iframe');
streamMovie.className = 'stream-movie';

const title = document.createElement('span');
title.className = 'title';
const description = document.createElement('span');
description.className = 'description';
const playButton = document.createElement('button');
playButton.innerHTML = 'Play';
playButton.className = 'play-button';

coverDiv.appendChild(leftDiv)
coverDiv.appendChild(rightDiv);
rightDiv.appendChild(title);
rightDiv.appendChild(description);
rightDiv.appendChild(playButton)
leftDiv.appendChild(card)


async function everything() {

    const allData = await data(pageNumber);
    const movies = allData.results;
    const oneMovie = movies.find(x => x.id === Number(movieId))
    console.log(movies)
    if(oneMovie) {
        watch.style.backgroundImage = `url(${imageBaseUrl+oneMovie.backdrop_path})`
        title.innerHTML = oneMovie.title
        description.innerHTML = oneMovie.overview
        card.style.backgroundImage = `url(${posterBaseUrl+oneMovie.poster_path})`
        
    }
    
}




everything();

function play() {

    watch.innerHTML = ''
    watch.appendChild(streamMovie)
    streamMovie.src = streamIt+ "/" +movieId

}

playButton.addEventListener("click", play);

