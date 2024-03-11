const buttons = document.querySelectorAll(".button");
// console.log(buttons)
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
