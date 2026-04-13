import { universalDiv } from "../Div/Div.js";
import { button } from "../Button/Button.js";


export function changer() {

    const pageChanger = universalDiv();
    const previous = button({text:'Previous'});
    const next = button({text:"Next"});
    pageChanger.className = 'main-div-bottom';

    previous.className = 'change-button';
    next.className = 'change-button';


    pageChanger.appendChild(previous)
    pageChanger.appendChild(next)


  

    
    
    return pageChanger;

}