import { getFinalCount } from "../count.js";

console.log(getFinalCount());
let finalCount = getFinalCount();

const allBoxes = document.querySelectorAll(".box");
const arr = [];
allBoxes.forEach((e) => {
  arr.push(e);
});

// console.log(arr)
const day = new Date();

const updataBasedOnData = () => {
  const h2 = document.createElement("h2");
  const div = document.createElement("div");
  div.setAttribute("class", "rewords");
  h2.innerHTML = finalCount;

  // putting it in perticular Day
  const toDay =  arr[day.getDate() - 1];
  toDay.appendChild(h2);
  let starCount = Math.floor(finalCount / 1000);
  console.log(starCount)
     for(let i = 0; i<starCount;i++){
        console.log("h")
        if(i < 5){
            const span = document.createElement("span");
            span.innerHTML = "⭐";
            div.appendChild(span);
        }
     }

  toDay.appendChild(div);
};

updataBasedOnData();
