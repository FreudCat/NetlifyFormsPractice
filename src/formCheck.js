const btn = document.getElementById("submitButton");
const isChecked = document.getElementsByTagName("iframe")[0].innerHTML;
const errorMessage = document.getElementById("errorMessage");

btn.addEventListener("click", e => {
  e.preventDefault(); 
  console.log(isChecked);
})