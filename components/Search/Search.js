import { input } from "../Input/Input.js";
import { universalDiv } from "../Div/Div.js";
import { button } from "../Button/Button.js";


export function search({giveValue} = {}) {

    const mainDiv = universalDiv();
    const logoDiv = universalDiv();
    const searchContainer = universalDiv();

    

    mainDiv.className = 'main-div';
    logoDiv.className = 'logo-div';
    searchContainer.className = 'search-container';

    const searchInput = input({className:'search-input'});
    const searchButton = button({className:'search-button', onClick:takeInput});
    


    mainDiv.appendChild(logoDiv);
    mainDiv.appendChild(searchContainer);

    
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    // logoDiv.appendChild(img);

    function takeInput() {

        const value = searchInput.value;
        giveValue(value);

    }

    const svgNS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "160");
    svg.setAttribute("height", "60");
    svg.setAttribute("viewBox", "0 0 300 120");

    // Gradient
    const defs = document.createElementNS(svgNS, "defs");
    const gradient = document.createElementNS(svgNS, "linearGradient");
    gradient.setAttribute("id", "redGradient");
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "0%");

    const stop1 = document.createElementNS(svgNS, "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#8B0000");

    const stop2 = document.createElementNS(svgNS, "stop");
    stop2.setAttribute("offset", "50%");
    stop2.setAttribute("stop-color", "#E50914");

    const stop3 = document.createElementNS(svgNS, "stop");
    stop3.setAttribute("offset", "100%");
    stop3.setAttribute("stop-color", "#8B0000");

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    gradient.appendChild(stop3);
    defs.appendChild(gradient);

    // M path
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M20 100 L20 20 L50 20 L90 80 L130 20 L160 20 L160 100 L130 100 L130 50 L90 100 L50 50 L50 100 Z");
    path.setAttribute("fill", "url(#redGradient)");

    // Text
    const text1 = document.createElementNS(svgNS, "text");
    text1.setAttribute("x", "170");
    text1.setAttribute("y", "70");
    text1.setAttribute("fill", "white");
    text1.setAttribute("font-size", "24");
    text1.setAttribute("font-family", "Arial Black");
    text1.textContent = "PIRATES";

    const text2 = document.createElementNS(svgNS, "text");
    text2.setAttribute("x", "170");
    text2.setAttribute("y", "40");
    text2.setAttribute("fill", "#E50914");
    text2.setAttribute("font-size", "14");
    text2.setAttribute("font-family", "Arial");
    text2.textContent = "MOVIE";

    // assemble
    svg.appendChild(defs);
    svg.appendChild(path);
    svg.appendChild(text2);
    svg.appendChild(text1);

    logoDiv.appendChild(svg);

    


    
    const searchIcon = document.createElementNS(svgNS, "svg");
    searchIcon.setAttribute("width", "20");
    searchIcon.setAttribute("height", "20");
    searchIcon.setAttribute("viewBox", "0 0 24 24");
    searchIcon.setAttribute("fill", "none");

    // lens
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", "11");
    circle.setAttribute("cy", "11");
    circle.setAttribute("r", "7");
    circle.setAttribute("stroke", "white");
    circle.setAttribute("stroke-width", "2");

    // handle
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", "16");
    line.setAttribute("y1", "16");
    line.setAttribute("x2", "21");
    line.setAttribute("y2", "21");
    line.setAttribute("stroke", "white");
    line.setAttribute("stroke-width", "2");
    line.setAttribute("stroke-linecap", "round");

    searchIcon.appendChild(circle);
    searchIcon.appendChild(line);

    searchButton.appendChild(searchIcon);
    return mainDiv;

}