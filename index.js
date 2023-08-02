const appElement = document.getElementById("app");

let globalState = []

const renderChooseFormPage = (element) =>{
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
        <button type="submit" class="start-button">Старт</button>
    </div>
    </form>
    `
    element.innerHTML = chooseFormHtml;

    const complexityRadioElements = document.querySelectorAll(".complexity-radio");
    let complexityNumber = "";

    for (const complexityRadioElement of complexityRadioElements) {
        complexityRadioElement.addEventListener("click", function(isit) {
            the_class = isit.target.className;
            the_id = isit.target.id;
            complexityNumber = document.querySelector("#"+the_id ).value;
            return complexityNumber;
            //console.log(complexityNumber)
        });
    }

    console.log(complexityNumber);

    const chooseForm = document.querySelector(".choose-form")

    chooseForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!complexityNumber) {
            alert("Сложность не выбрана")
        } else {
            globalState = [{
                complexity: complexityNumber,
            }];
            console.log(globalState);
            renderPlayingField(element);
        }
    })

};

renderChooseFormPage(appElement);

const renderPlayingField = (element) =>{
    const playingFieldHtml = `<p>Здесь будет игровое поле</p>`;
    element.innerHTML = playingFieldHtml;
}


