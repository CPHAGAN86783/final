const txtInput = document.querySelector(".inputs input")
checkBtn = document.querySelector(".inputs button"); 
infoText = document.querySelector(".info-text");
let filterInput;

//splitting user input , reversing ,
//joining them in one word

checkBtn.addEventListener("click", () => {
   let userInput = txtInput.value.toLowerCase().replace(/[^a-z0-9]/ig, ''); 
   let reverseInput = userInput.split("").reverse().join("");
   infoText.style.display = "block";
   if (userInput !== reverseInput) {
       infoText.innerHTML = `No, <span>${txtInput.value}</span> isn't a Palindrome!`;
   } else {
       infoText.innerHTML = `Yes, <span>${txtInput.value}</span> is a Palindrome!`;
   }
});

txtInput.addEventListener("keyup", () => {
   let filterInput = txtInput.value.toLowerCase().replace(/[^a-z0-9]/ig, ''); 
   if (filterInput) {
       checkBtn.classList.add("active");
   } else {
       checkBtn.classList.remove("active");
       infoText.style.display = "none";
   }
});