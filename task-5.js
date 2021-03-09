const refs = {
  inputRef: document.querySelector("input"),
  nameOutputRef: document.querySelector("#name-output"),
};

refs.inputRef.addEventListener("input", changeName);

function changeName(event) {
  refs.nameOutputRef.textContent = " "
    ? "незнакомец"
    : event.currentTarget.value;
  console.log(event.currentTarget.value);
}
