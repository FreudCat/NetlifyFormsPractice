const btn = document.getElementById("submitButton");
const isChecked = document.getElementsByTagName("iframe");
const ariaChecked = document.getAttribute("aria-checked");
const errorMessage = document.getElementById("errorMessage");

btn.addEventListener("click", e => {
  e.preventDefault(); 
  console.log(ariaChecked);
})