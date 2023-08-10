
export function renderPlayingField (element, array, complexity) {
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
    <!--<h2>Выбран уровень сложности ${complexity}</h2>-->
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

    let flippedСards = [];

    const initGame = () => {
        const cardElements = document.querySelectorAll(".card")

        for (const cardElement of cardElements){
            cardElement.addEventListener('click', () => {
                const flipTheCard = () => {
                    const index = cardElement.dataset.index;
                    array[index].isClicked = true
                    renderPlayingField (element, array, complexity)
                }


                const getCardId = () => {
                        //for (let i = 0; i < 2; i++) {
                            flippedСards.push(cardElement.dataset.id);
                            return flippedСards
                        //}
                } 

                getCardId ()

                if (flippedСards.length < 2) {
                   getCardId()
                    if (flippedСards.length === 2 && flippedСards[0] === flippedСards[1]) {
                        flipTheCard ()
                        console.log(flippedСards)
                    } else if (flippedСards.length === 2 && flippedСards[0] !== flippedСards[1]) {
                        alert ("Вы проиграли")
                        console.log(flippedСards)
                    }

                } else {
                    renderPlayingField (element, array, complexity)
                }
            })
            
        }
        
    }
    initGame ()


}