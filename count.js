const countNum = document.querySelector(".count");
const reset = document.querySelector("#btn1");
const colorBtn = document.querySelector("#btn2");

let num = Number(localStorage.getItem("greeting")) || 0;
let bgColor = localStorage.getItem("color");

countNum.innerHTML = num;
document.body.style.backgroundColor = bgColor;
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
  num = -1; // Reset to 0
});

let colors = [
  "#46f1a3c5",
  "#a346f1c5",
  "#f18c46c5",
  "#46f1e1c5",
  "#00000091",
  "#6b8291c5",
  "#f1ee46c5",
];
let nextcolor = 0;
colorBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  // console.log("clicked")
  document.body.style.backgroundColor = colors[nextcolor];
  localStorage.setItem("color", colors[nextcolor]);
  if (nextcolor === colors.length - 1) {
    nextcolor = 0;
  }else {
      nextcolor++;
    }
});
