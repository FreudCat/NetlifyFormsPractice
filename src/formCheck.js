const btn = document.getElementById("submitButton");
const isChecked = document.getElementsByTagName("iframe")[0].contentDocument;
const spanbox = document.getElementsByTagName("span");
const actualBox = document.getElementsByClassName("recaptcha-checkbox");
const ariaChecked = isChecked.contentDocument;
const errorMessage = document.getElementById("errorMessage");

btn.addEventListener("click", e => {
  e.preventDefault(); 
  console.log(isChecked);
  console.log(ariaChecked);
})