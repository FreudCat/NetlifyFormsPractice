const btn = document.getElementById("submitButton");
const isChecked = document.getElementsByTagName("iframe");
const errorMessage = document.getElementById("errorMessage");

btn.addEventListener("click", e => {
  e.preventDefault(); 
  console.log(isChecked[0].innerHTML);
})