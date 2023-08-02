const appElement = document.getElementById("app");

const globalState = []

const renderChooseFormPage = () =>{
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
    appElement.innerHTML = chooseFormHtml;

    
};

renderChooseFormPage();


