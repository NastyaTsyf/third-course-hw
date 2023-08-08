import { getRandomCards } from "./get-random-cards-component.js";

export function renderPlayingField (element, array, complexity) {
    const cardsHtml = getRandomCards(array, complexity).map((card) =>{
        if (card.isClicked === true) {
            return card.backImg
        } else {
            return`<div class="card item">
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
        </div>`
        }
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
}