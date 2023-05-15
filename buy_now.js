// create a variables
const wrnMsg = document.querySelector(".wrn-msg");
const usrInput = document.querySelector('.field-input')
const userLetterPreviw = document.querySelector('.plaque-prev')
const buybtn = document.querySelector(".buy-submit")
const succMsg = document.querySelector(".succ-Msg")

// create an Arrow Function 

const buyNow = () => {

    if(usrInput.value === "") {
      wrnMsg.textContent = ("Please input letters")
       succMsg.textContent = ("")
    }

    if (usrInput.value.length > 15 ) {
      wrnMsg.textContent = ("You have exceeded the number of avaliable letter")
       succMsg.textContent = ("")
     }

    else if  (usrInput.value.toLowerCase() === 'Your Name'.toLowerCase()) {
      wrnMsg.textContent=("Enter letter")
       succMsg.textContent = ("")
   }
   
   else { succMsg.textContent = (" Congratulation you have entered a correct letter ")
  }
   
    
}
  // addEventListener
    buybtn.addEventListener ('click', buyNow)