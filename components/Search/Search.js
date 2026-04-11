import { input } from "../Input/Input.js"
import { universalDiv } from "../Div/Div.js";
import { button } from "../Button/Button.js"

export function search({items, query} = {}) {

    const mainDiv = universalDiv();
    const logoDiv = universalDiv();
    const searchContainer = universalDiv();

    mainDiv.className = 'main-div';
    logoDiv.className = 'logo-div';
    searchContainer.className = 'search-container';

    const searchInput = input();
    const searchButton = button();


    mainDiv.appendChild(logoDiv);
    mainDiv.appendChild(searchContainer);

    searchContainer.appendChild(logoDiv);
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    
    return mainDiv;

}