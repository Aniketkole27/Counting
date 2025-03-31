let num = Number(localStorage.getItem("counter")) || 0;
// let num = 6000;
let bgColor = localStorage.getItem("color");
// let isLock = localStorage.getItem("isLock");

export function getFinalCount() {
  return num;
}
  
document.addEventListener("DOMContentLoaded", (e) => {
  const countNum = document.querySelector(".count");
  const reset = document.querySelector("#btn1");
  const colorBtn = document.querySelector("#btn2");
  const data = document.querySelector("#data");
  const lock = document.querySelector("#lock");
  const Gname = document.querySelector(".Gname");

  countNum.innerHTML = num;
  document.body.style.backgroundColor = bgColor;

  let isLock = false;
  const counting = () => {
    if (!isLock) {
      num++;
      countNum.innerHTML = num;
      localStorage.setItem("counter", num);
    }
  };

  document.body.addEventListener("keydown", (e) => {
    if (e.code == "Space" && document.activeElement !== reset) {
      counting();
    }
  });

  document.body.addEventListener("click", () => {
    counting();
  });

  reset.addEventListener("click", (event) => {
    let agree = confirm("Do you want to resend your counter?");
    if (agree) {
      num = -1; // Reset to 0
    } else {
      event.stopPropagation();
    }
  });

  // bg colors array
  let colors = [
    "#46f1a3c5",
    "#a346f1c5",
    "#f18c46c5",
    "#46f1e1c5",
    "#00000091",
    "#6b8291c5",
    "#f1ee46c5",
  ];

  // Handing the background color
  let nextcolor = 0;
  colorBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    // console.log("clicked")
    document.body.style.backgroundColor = colors[nextcolor];
    localStorage.setItem("color", colors[nextcolor]);
    if (nextcolor === colors.length - 1) {
      nextcolor = 0;
    } else {
      nextcolor++;
    }
  });

  let entry = 0;
  lock.addEventListener("click", (event) => {
    event.stopPropagation()
    isLock = !isLock;
    lock.innerHTML = isLock ? "🔒" : "🔓";
    // localStorage.setItem("lock", isLock);
  });

  data.addEventListener("click", (event) => {
    event.stopPropagation();
  
  });
});
