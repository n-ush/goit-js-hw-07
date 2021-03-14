const inputRef = document.querySelector("#validation-input");
const validNumber = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", handleInputValidation);

function handleInputValidation() {
  if (inputRef.value.length === validNumber) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
