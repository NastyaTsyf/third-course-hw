import { cards } from "./components/cards-component.js"
import { renderPlayingField } from "./components/render-playing-field-component.js"


const appElement = document.getElementById("app")
let globalState = {}
const renderApp = (element) => {
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
            renderPlayingField(element, cards, globalState.complexity)
        }
    })
}
renderApp(appElement)















