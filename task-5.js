const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", changeName);

function changeName(event) {
  nameOutputRef.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    nameOutputRef.textContent = "незнакомец";
  }
}
