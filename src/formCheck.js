const btn = document.getElementById("submitButton");
const isChecked = document.getElementById("checkbox").innerHTML;
const errorMessage = document.getElementById("errorMessage");

btn.addEventListener("click", e => {
  e.preventDefault(); 
  console.log(isChecked);
})