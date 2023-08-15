import '/style.css';
import { cards } from "./components/cards-component.js"
import { getRandomCards } from "./components/get-random-cards-component.js"
import { renderPlayingFieldStart } from "./components/render-playing-field-component.js"
import { initGame } from "./components/render-playing-field-component.js"

const appElement = document.getElementById("app")

let globalState = {
    status: "Выбор сложности",
    selectedCards: [],
    result: "",
}

const renderApp = (element) => {
    if (globalState.status === "Выбор сложности") {
        const chooseFormHtml = `<form class="container" id="choose-form">
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
            })
        }
        const chooseForm = document.getElementById("choose-form")
        chooseForm.addEventListener("submit", (event) => {
            event.preventDefault()
            if (!complexityNumber) {
                alert("Сложность не выбрана")
            } else {
                globalState.status = "Игра"
                globalState.complexity = complexityNumber
                renderApp(appElement)
            }
        })
    } else if (globalState.status === "Игра") {

        const randomCards = getRandomCards(cards, globalState.complexity)
        globalState.generatedCards = randomCards
        renderPlayingFieldStart(randomCards, element, true, globalState)
        setTimeout(
            renderPlayingFieldStart,
            5000,
            randomCards,
            element,
            false,
            globalState,
        )
        setTimeout(
            initGame,
            5000,
            element,
            randomCards,
            globalState.status,
            globalState.selectedCards,
            globalState.result,
            globalState.generatedCards
        )
        console.log(globalState.status)

        
                
        //renderApp(appElement)
        console.log(globalState)

    } else if (globalState.status === "Результат") {
        alert("заглушка результата")
        //renderApp (appElement)
    }
}

renderApp(appElement)
