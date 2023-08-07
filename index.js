import { cards } from "./components/cards-component.js"

const appElement = document.getElementById("app")
let globalState = {}
const renderApp = (element,  cartSide) => {
    const chooseFormHtml = `<form class="choose-form">
    <h1 class="title">Выбери <br> сложность</h1>
    <div class="complexity-radio-box">
        <input type="radio" id="radio1" value="1" class="complexity-radio" name="complexity">
        <label for="radio1">1</label>
        <input type="radio" id="radio2" value="2" class="complexity-radio" name="complexity">
        <label for="radio2">2</label>
        <input type="radio" id="radio3" value="3" class="complexity-radio" name="complexity">
        <label for="radio3">3</label>
    </div>
    <div class="start-submit-box">
        <button type="submit" class="button">Старт</button>
    </div>
    </form>`
    element.innerHTML = chooseFormHtml
    const complexityRadioElements =
        document.querySelectorAll(".complexity-radio")
    let complexityNumber = ""
    for (const complexityRadioElement of complexityRadioElements) {
        complexityRadioElement.addEventListener("click", function (isIt) {
            const theId = isIt.target.id
            complexityNumber = document.querySelector("#" + theId).value
            return complexityNumber
            //console.log(complexityNumber)
        })
    }
    console.log(complexityNumber)
    const chooseForm = document.querySelector(".choose-form")
    chooseForm.addEventListener("submit", (event) => {
        event.preventDefault()
        if (!complexityNumber) {
            alert("Сложность не выбрана")
        } else {
            globalState = {
                complexity: complexityNumber,
            }
            console.log(globalState.complexity)
            renderPlayingField(element, globalState.complexity,cartSide)
        }
    })
}
renderApp(appElement)

const renderPlayingField = (element, number) => {
    const cardsHtml = cards.map((card) =>{
        if (card.isClicked == true) {
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
    <!--<h2>Выбран уровень сложности ${number}</h2>-->
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






