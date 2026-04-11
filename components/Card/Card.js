import { universalDiv } from "../Div/Div.js";
import { universalSpan } from "../Span/Span.js";

export function universalCard(imgUrl, posterTitle, moviesDescription) {
   const card = universalDiv();
   const poster = universalDiv();
   const movieTitle = universalDiv();

   const title = universalSpan();
   const description = universalSpan();
   title.className = 'titleSpan';
   description.className = 'descriptionSpan';
    title.innerHTML = posterTitle;
    description.innerHTML = moviesDescription;

   card.className = 'universal-card';
   poster.className = 'poster';
   movieTitle.className = 'movieTitle';


   card.appendChild(poster);
   card.appendChild(movieTitle);

   movieTitle.appendChild(title);
   movieTitle.appendChild(description);


   poster.style.backgroundImage = `url(${imgUrl})`
   



   return card;
}