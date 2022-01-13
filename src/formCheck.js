const btn = document.getElementById("submitButton");
const isChecked = document.getElementsByTagName("iframe");
const spanbox = document.getElementsByTagName("span");
const actualBox = document.getElementsByClassName("recaptcha-checkbox");

const errorMessage = document.getElementById("errorMessage");

console.log(isChecked[0]);
  const ariaChecked = isChecked[0].contentWindow;
  console.log(ariaChecked);

btn.addEventListener("click", e => {
  e.preventDefault(); 
  
})