// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');

// Count Letters
function countLeters(some_data){
  // console.log(some_data);
  const optsName = some_data.replace(' ', ''); // remove spaces
  const price = optsName.length * 5; // price of each letter
  userLeterPreview.textContent = some_data

  userPricePreview.textContent = '$'+price
}

userInput.addEventListener('input', function(e){
  countLeters(e.target.value)
})


const guess = document.querySelector('#guessField');
const formField = document.querySelector('.field-container');



/* bbbbbbbb */
