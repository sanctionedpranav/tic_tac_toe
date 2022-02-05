window.addEventListener("load", bindEvent);
let buttons;
function bindEvent() {
  //Alternate Method

    // let buttons = document.getElementsByTagName('button');
    // Array.prototype.forEach.call(buttons, (button) => button.addEventListener('click', printXorZero));

  buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", printXorZero);
  }
}

const isNotBlank = (button) => (button.innerText.length != 0);

const isSame = (first, second, third) =>
  first.innerText == second.innerText && first.innerText == third.innerText;

function isGameOver() {

    // Rows
  compareThree(buttons[0], buttons[1], buttons[2]) ||
    compareThree(buttons[3], buttons[4], buttons[5]) ||
    compareThree(buttons[6], buttons[7], buttons[8]);

    //Columns
    compareThree(buttons[0], buttons[3], buttons[6]) ||
      compareThree(buttons[1], buttons[4], buttons[7]) ||
      compareThree(buttons[2], buttons[5], buttons[8]);

      //Diagonals
      compareThree(buttons[0], buttons[4], buttons[8]) ||
        compareThree(buttons[2], buttons[4], buttons[6]);
}

function compareThree(first, second, third) {
  if (isNotBlank(first) && isNotBlank(second) && isNotBlank(third)) {
    if (isSame(first, second, third)) {
      return true;
    }
  }
  return false;
}

function reset(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button=>button.innerText = '');
    flag = true;
    count = 0;  
}



let flag = true;
var count = 0;

function printXorZero() {
  console.log("Print X or Zero", this);
  let button = this;
  if (button.innerText.length == 0) {
      count++;
    button.innerText = (flag === true ? "X" : "O");
    flag = !flag;

   
  }
   if (count >= 5) {
     document.getElementById("result").innerText = isGameOver()
       ? "Game Over"
       : "";
   }
}
