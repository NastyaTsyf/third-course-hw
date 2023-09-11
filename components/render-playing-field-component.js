
export function renderPlayingField (array, element) {
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
    element.innerHTML = playingFieldHtml
}

export function renderPlayingFieldStart (array, element, state) {
    renderPlayingField (array, element)
    const cardElements = document.querySelectorAll(".card")
    for (const cardElement of cardElements){
        const index = cardElement.dataset.index;
        array[index].isClicked = state}
    renderPlayingField (array, element)
}    

let flippedСards = [];

export function initGame (element, array, globalState)  {
    renderPlayingField (array, element)


    const cardElements = document.querySelectorAll(".card")
        for (const cardElement of cardElements){        
            cardElement.addEventListener('click', () => {
                const index = cardElement.dataset.index;
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
                                
                                alert("Вы проиграли")
                                console.log(globalState)
                                return globalState
                            }
                        }  else {
                            flippedСards = []
                            CompareACoupleOfCards ()
                        }
                            
                        } else {
                            Object.defineProperty(globalState, "status", {value : "Результат"})
                            Object.defineProperty(globalState, "result", {value : "win"})
                            alert("Вы выиграли")
                            console.log(globalState)
                            return
                        }
                    
                    }
                    CompareACoupleOfCards ()

                 initGame (element, array, globalState)
                }
                flipTheCard()
            })
        }

    
}




