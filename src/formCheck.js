const btn = document.getElementById("submitButton");
const isChecked = document.getElementsByTagName("iframe");
const spanbox = document.getElementsByTagName("span");
const actualBox = document.getElementsByClassName("recaptcha-checkbox");

const errorMessage = document.getElementById("errorMessage");

console.log(isChecked[0]);
  const ariaChecked = isChecked[0].contentWindow;
  console.log(ariaChecked);
  const doc = ariaChecked.document.getElementsByTagName("span")[0];
  console.log(doc);

btn.addEventListener("click", e => {
  e.preventDefault(); 
  console.log(isChecked[0]);
})