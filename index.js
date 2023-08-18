const num = document.getElementById("number");
const NumberToGuess = document.getElementById("GuessNumber");
let btn = document.getElementById("enter");
const content = document.getElementById("content");
let Attempts = document.getElementById("attempts");
let Score = document.getElementById("Score");
const GuessNum = Math.floor(Math.random() * 100);
let input = 0;
console.log(GuessNum)
let attempt = 0;
let marks = 100;
const CheckNum = () => {
    let input = Number(num.value);
    
   if(input == GuessNum){
    attempt += 1;
    content.innerText=`Congratulations!\n You Guessed the Right number`
    NumberToGuess.innerText=`${GuessNum}`
    Score.innerText =`${marks-(attempt-1)}`
   }
   else if(input > GuessNum){
    attempt += 1;
    content.innerText = ` Sorry, Number didn't match!\n Your Number is Greater than the Actual Number\nEnter a smaller Number...`
    Score.innerText = `To be Calculated...`
   }
   else if(input < GuessNum){
    attempt += 1;
    content.innerText = ` Sorry, Number didn't match!\n Your Number is Smaller than the Actual Number\nEnter a Bigger Number...`
    Score.innerText = `To be Calculated...`
   }
   else{
    content.innerText=`Invalid Input\nTry Again...`
    Score.innerText = `To be Calculated...`
   }
   Attempts.innerText = `${attempt}`
   num.value = String("")
}
if(input == 0){
    content.innerText=`Enter a number between (0 - 99)`
}

btn.addEventListener("click", CheckNum);

