import { input } from "../Input/Input.js";
import { universalDiv } from "../Div/Div.js";
import { button } from "../Button/Button.js";


export function search({giveValue} = {}) {

    const mainDiv = universalDiv();
    const logoDiv = universalDiv();
    const searchContainer = universalDiv();
    const img = document.createElement('img');

    
    img.src = "./assets/images/logo.png"

    mainDiv.className = 'main-div';
    logoDiv.className = 'logo-div';
    searchContainer.className = 'search-container';

    const searchInput = input({className:'search-input'});
    const searchButton = button({className:'search-button', text:"☠", onClick:takeInput});
    


    mainDiv.appendChild(logoDiv);
    mainDiv.appendChild(searchContainer);

    
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    logoDiv.appendChild(img);

    function takeInput() {

        const value = searchInput.value;
        giveValue(value);

    }
    
    return mainDiv;

}