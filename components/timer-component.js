export function timer(element){ 
   if (element.value <= 59) {
      element.value = parseInt(element.value)+1;
      console.log(element.value)
   } else {
      element.value = 0
      element.value = parseInt(element.value)+1;
      console.log(element.value)  
   }

 }

 export function startSekTimer(timerSekId, timer, element){ 
    timerSekId = setInterval(timer, 1000, element);
 }

 export function startMinTimer(timerMinId, timer, element){ 
   timerMinId = setInterval(timer, 60000, element);
}

 export function stopTimer(timerSekId, timerMinId) { 
    clearInterval(timerSekId);
    clearInterval(timerMinId);
 }

 