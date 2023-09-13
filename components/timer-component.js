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


export function stopTimer(timerSekId, timerMinId) { 
    clearInterval(timerSekId);
    clearInterval(timerMinId);
 }

 