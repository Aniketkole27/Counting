let num = Number(localStorage.getItem("counter")) || 0;
let bgColor = localStorage.getItem("color");
const day = new Date();
console.log(day.getHours())

let numbers = JSON.parse(localStorage.getItem("dataArray"));
export function getFinalCount() {
  return numbers;
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
  let counting = () => {
    if (!isLock) {
      num++;
      countNum.innerHTML = num;
      localStorage.setItem("counter", num);
      updateValue(day.getDate() - 1, num);
    }
    // if(day.getHours() === 0) {
    //   resetBtn(true);
    // }
  };
  
  document.body.addEventListener("keydown", (e) => {
    if (e.code == "Space" && document.activeElement !== reset) {
      counting();
    }
  });
  
  document.body.addEventListener("click", (e) => {
    e.stopPropagation();
    counting();
  });
  
  function updateUI(){
    countNum.innerHTML = num;
    localStorage.setItem("counter", num);
    updateValue(day.getDate() - 1, num);
  }

  function resetBtn(agree){
    if (agree) {
      num = 0;
    }
    updateUI();
  }
  
  reset.addEventListener("click", (event) => {
    event.stopPropagation();
    let agree = confirm("Do you want to resend your counter ?");
      resetBtn(agree);
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
    event.stopPropagation();
    isLock = !isLock;
    lock.innerHTML = isLock ? "🔒" : "🔓";
  });


    data.addEventListener("click", (event) => {
      event.stopPropagation();
      // counting();
    });

});

// initializeArray();
function functionCaller() {
  initializeArray();
  updateValue(day.getDate() - 1, num);
}

functionCaller();

function initializeArray() {
  if (!localStorage.getItem("dataArray")) {
    let numbers = new Array(31).fill(0);
    console.log(numbers);
    localStorage.setItem("dataArray", JSON.stringify(numbers));
  }
}

function updateValue(index, update) {
  let numbers = JSON.parse(localStorage.getItem("dataArray"));
  numbers[index] = update;
  localStorage.setItem("dataArray", JSON.stringify(numbers));
}

// resetArray();
function resetArray() {
  localStorage.removeItem("dataArray");
  initializeArray();
}
