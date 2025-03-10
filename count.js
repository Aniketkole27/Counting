const countNum = document.querySelector(".count");
const reset = document.querySelector("#btn");

let num = Number(localStorage.getItem("greeting")) || 0;
countNum.innerHTML = num;
const counting = () => {
  num++;
  countNum.innerHTML = num;
  localStorage.setItem("greeting", num);
};

document.body.addEventListener("keydown", (e) => {
  if (e.code == "Space" && document.activeElement !== reset) {
    counting();
  }
});

document.body.addEventListener("click", () => {
  counting();
});

reset.addEventListener("click", () => {
  // num = -1; // Reset to 0
  num = 0; // Reset num to 0
  countNum.innerHTML = num; // Update the display
  localStorage.setItem("greeting", num);
});
