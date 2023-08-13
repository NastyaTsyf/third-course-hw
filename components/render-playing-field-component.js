
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
    <div class="header">
        <div class="timer">
            <div class="units">
                <p class="unit-item">min</p>
                <p class="unit-item">sek</p>
            </div>
            <div class="time"><p>00.00</p></div>
        </div>
        <button class="button">Начать заново</button>
    </div>
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


//let flippedСards = [];
export function initGame (element, array)  {
    //renderPlayingFieldStart (array, element, state)
    renderPlayingField (array, element)
    const cardElements = document.querySelectorAll(".card")
        for (const cardElement of cardElements){
            cardElement.addEventListener('click', () => {
                const index = cardElement.dataset.index;
                const flipTheCard = () => {
                    array[index].isClicked = true
                    initGame (element, array)
                }
                flipTheCard()

                //const getCardId = () => {
                //} 

                //if (flippedСards.length <= 2) {
                //    getCardId()
//
                //    if (flippedСards.length === 2 && flippedСards[0] === flippedСards[1]) {
//
                //        renderPlayingField (element, array, complexity)
                //        console.log(flippedСards)
                //        
                //    } else if (flippedСards.length === 2 && flippedСards[0] !== flippedСards[1]) {
                //        renderPlayingField (element, array, complexity)
                //        alert ("Вы проиграли")
                //        console.log(flippedСards)
                //    } else {
                //        renderPlayingField (element, array, complexity)
                //        console.log(flippedСards)
                //    }
//
                //} else {
                //    getCardId()
                //    renderPlayingField (element, array, complexity)
//
                //}
            })
            
        }
        
    }



