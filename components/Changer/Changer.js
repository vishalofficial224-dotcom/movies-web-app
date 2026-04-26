import { universalDiv } from "../Div/Div.js";
import { button } from "../Button/Button.js";


export function changer(pages, turning) {

    const pageChanger = universalDiv();
    const pageListNumber = universalDiv();
    pageListNumber.className = "page-list"
    const previous = button({text:'Previous', onClick:CurrentPageMinus});
    const next = button({text:"Next", onClick:CurrentPagePlus});
    const span = document.createElement('span');
    span.className = 'span';
    pageChanger.className = 'main-div-bottom';

    previous.className = 'change-button';
    next.className = 'change-button';

   


    pageChanger.appendChild(previous)
    pageChanger.appendChild(pageListNumber)
    pageChanger.appendChild(next)

    let num = 0;
    function showPegination(currentPage) {
        pageListNumber.innerHTML = ""
        const visible = 8;

        let start = currentPage;
        let end = currentPage+visible-1;

        const views = pages.slice(start, end)
        
        for (let p of views) {
            const button = document.createElement("button");
            button.className = "button-pages";
            button.innerHTML = p
            pageListNumber.appendChild(button)
            button.addEventListener("click", (e) => {
                turning(p)
                console.log(p)
            } )
        }
    }

    showPegination(num)
  
    function CurrentPagePlus(e) {

        num++
        showPegination(num)

    }

    function CurrentPageMinus(e) {
        if(num > 0) {
            num--
            showPegination(num)
        }
        

    }
    
    return pageChanger;

}