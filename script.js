let input = document.querySelector(".input");
let button = document.querySelectorAll("button");

for(let i = 0; i<button.length;i++) {
    button[i].addEventListener("click",()=> {
       let buttonValue = button[i].textContent;
       if(buttonValue==="AC"||buttonValue==="DE") {
        clearAll();
       } else if(buttonValue==="=") {
        calculateResult();
       } else {
        appendValue(buttonValue);
       }
    })
}
function clearAll() {
    input.value = "";
}
function calculateResult() {
    input.value = eval(input.value);
  }
  
  function appendValue(buttonValue) {
    input.value += buttonValue;
    //   inputFieldEl.value = inputFieldEl.value + buttonValue;
  }
