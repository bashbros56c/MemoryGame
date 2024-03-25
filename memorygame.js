const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.setAttribute('id', color);
    newDiv.classList.add("back");

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let cardColor1 = ""
let cardColor2 = ""
// TODO: Implement this function!
function handleCardClick(event) {
if(event.target.classList == 'solved'){
return
}
else{
  let frontCards = document.querySelectorAll('.front').length
  // you can use event.target to see which element was clicked
   if(frontCards > 1 === true){
    return
   }
  event.target.classList.toggle("back")
  event.target.classList.toggle("front")
const cardColor= (event.target.id);
  event.target.style.backgroundColor = cardColor;
console.log(event.target.classList)
  if(frontCards < 1 === true){
    cardColor1 = event.target.id
    console.log(cardColor1)
  }
else{
  cardColor2 = event.target.id
  console.log(cardColor1, cardColor2)
  checkMatch()
}}
}

setInterval(function checkMatch(){
  if(cardColor1 == cardColor2){  
    document.querySelector('.front').classList.toggle("solved")
    document.querySelector('.front').classList.toggle("front")
    document.querySelector('.front').classList.toggle("solved")
    document.querySelector('.front').classList.toggle("front")
    }
else{
  document.querySelector('.front').classList.toggle("back")
  document.querySelector('.front').classList.toggle("front")
  document.querySelector('.front').classList.toggle("back")
  document.querySelector('.front').classList.toggle("front")
  //.toggle("front").toggle("back")document.querySelector('.front').classList.toggle("front").toggle("back")
}
  // .classList.toggle("front").classList.toggle("back")
},4000)

// when the DOM loads
createDivsForColors(shuffledColors);
//make logic if card1 exists