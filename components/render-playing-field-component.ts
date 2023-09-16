import { Cards } from "./get-random-cards-component";

export type GlobalState = {
    complexity: number;
    status: string;
    generatedCards: Cards;
    selectedCards: Array<string>;
    result: string;
    time: string;
}

export function renderPlayingField (array: Cards, element: HTMLElement | null) {
    const cardsHtml = array.map((card, index) =>{
        
        return`
            <div class="card ${card.isClicked ? '' : 'back-of-card'}"  data-id="${card.name}" data-index="${index}">
                <div class="${card.isClicked ? '' : 'invisible'}">
                    <div class="rank header-rank">
                        <div class="rank-box">
                            <p class="rank-text">${card.rank}</p>
                            ${card.suitImgLittle}  
                        </div>
                    </div>
                    <div class="suit"> 
                        ${card.suitImgBig}        
                    </div>
                    <div class="rank footer-rank">
                        <div class="rank-box">
                            <p class="rank-text footer-rank-text">${card.rank}</p>
                            ${card.suitImgLittle} 
                        </div>
                    </div>
                </div>
            </div>`
    }).join('');

    const playingFieldHtml = `
    <div class="playing-field">
    ${cardsHtml}
    </div>`
    if (element) {
        element.innerHTML = playingFieldHtml
    }

}

export function renderPlayingFieldStart (array: Cards, element: HTMLElement | null, state: boolean) {
    renderPlayingField (array, element)
    const cardElements = document.querySelectorAll(".card")
    const cardElementArray = Array.from(cardElements)
    for (const cardElement of cardElementArray){
        const index = Number((cardElement as HTMLElement).dataset.index);
        if (cardElement) {
            array[index].isClicked = state
        }}
    renderPlayingField (array, element)
}    

let flippedСards: Array<string> = [];

export function initGame (element: HTMLElement | null, array: Cards, globalState: GlobalState, renderAppWindow: () => void)  {
    if (globalState.status === "Результат") {
        return
        
    } else {

        renderPlayingField (array, element)

        const cardElements = document.querySelectorAll(".card")
        const cardElementArray = Array.from(cardElements)
            for (const cardElement of cardElementArray){        
                cardElement.addEventListener('click', () => {
                    const index = Number((cardElement as HTMLElement).dataset.index);
                    const flipTheCard = () => {
                        
                        array[index].isClicked = true
                        const CompareACoupleOfCards = () => {

                            if (
                                globalState.selectedCards.length <
                            (globalState.generatedCards.length - 1)
                            ) {
                                if (flippedСards.length <= 1) {
                                    flippedСards.push(array[index].name);
                                    console.log(flippedСards)
                                    globalState.selectedCards.push(array[index].name)
                                    if ((flippedСards.length === 2 && flippedСards[0] !== flippedСards[1])) {
                                        Object.defineProperty(globalState, "status", {value : "Результат"})
                                        Object.defineProperty(globalState, "result", {value : "loss"})
                                        //alert("Вы проиграли")
                                        console.log(globalState)
                                        renderAppWindow()
                                        return
                                        
                                    }
                                }  else {
                                    flippedСards = []
                                    CompareACoupleOfCards ()
                                }
                                
                            } else if (globalState.selectedCards.length ===
                                (globalState.generatedCards.length - 1)) {
                                flippedСards = []
                                Object.defineProperty(globalState, "status", {value : "Результат"})
                                Object.defineProperty(globalState, "result", {value : "win"})
                                //alert("Вы выиграли")
                                console.log(globalState)
                                renderAppWindow()
                                return
                            }
                        
                        }
                        CompareACoupleOfCards ()
                        

                    initGame (element, array, globalState, renderAppWindow)
                    }
                    flipTheCard()
                    
                })
        }
    }

    
}





