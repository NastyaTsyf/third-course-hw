export function timer(elem, callback){ // функция таймера (подсчёт количества секунд)
    //const elem = document.getElementById('timer');
    elem.value = parseInt(elem.value)+1;
    console.log(elem.value)
    callback()
 }