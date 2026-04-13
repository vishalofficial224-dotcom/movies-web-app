import { universalDiv } from "../Div/Div.js";
import { button } from "../Button/Button.js";


export function changer(value, changeFunction) {

    const pageChanger = universalDiv();
    const previous = button({text:'Previous', onClick:changeFunction});
    const next = button({text:"Next", onClick:changeFunction});
    const span = document.createElement('span');
    span.className = 'span';
    pageChanger.className = 'main-div-bottom';

    previous.className = 'change-button';
    next.className = 'change-button';

    span.innerHTML = value;


    pageChanger.appendChild(previous)
    pageChanger.appendChild(span)
    pageChanger.appendChild(next)


  

    
    
    return pageChanger;

}