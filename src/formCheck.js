const btn = document.getElementById("submitButton");
const isChecked = document.getElementsByTagName("iframe");
const actualBox = document.getElementsByClassName("recaptcha-checkbox").length;
// const ariaChecked = isChecked.getAttribute("aria-checked");
const errorMessage = document.getElementById("errorMessage");

btn.addEventListener("click", e => {
  e.preventDefault(); 
  console.log(actualBox);
})