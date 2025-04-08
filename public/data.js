import { getFinalCount } from "../count.js";
const allBoxes = document.querySelectorAll(".box");
const day = new Date();

const arr = [];
allBoxes.forEach((e) => {
  arr.push(e);
});
let exportedArray = getFinalCount()
updateUi(exportedArray)

// const updataBasedOnData = () => {
//   initializeArray();
//   updateValue(day.getDate() - 1, finalCount);
// };

// updataBasedOnData();

// function initializeArray() {
//   if (!localStorage.getItem("dataArray")) {
//     let numbers = new Array(31).fill(0); 
//     localStorage.setItem("dataArray", JSON.stringify(numbers));
//   }
// }

// function updateValue(index, update) {
//   let numbers = JSON.parse(localStorage.getItem("dataArray"));
//   numbers[index] = update;
//   localStorage.setItem("dataArray", JSON.stringify(numbers)); 
//   updateUi(numbers);
// }

// function resetArray() {
//   localStorage.removeItem("dataArray");
//   initializeArray();
// }

function updateUi(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
    const div = document.createElement("div");
    div.setAttribute("class", "rewords");

      let h2 = document.createElement("h2");
      h2.innerHTML = numbers[i];
      arr[i].appendChild(h2);
      arr[i].appendChild(div)
      addStar(div,numbers[i]);
    }
    // console.log(numbers[i])
  }
}

function addStar(div,c){
  console.log(div)
  let starCount = Math.floor(c / 1000);
  for (let i = 0; i < starCount; i++) {
    // console.log("h")
    if (i < 5) {
      const span = document.createElement("span");
      span.innerHTML = "⭐";
      div.appendChild(span);
    }
  }
}
