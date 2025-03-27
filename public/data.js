import { getFinalCount } from "./count.js";

console.log(getFinalCount());

let finalCount = getFinalCount();

const allBoxes = document.querySelectorAll(".box");
const arr  = [];
allBoxes.forEach((e)=>{
    arr.push(e);
})

// console.log(arr)
const day = new Date();
console.log(day.getDate());

const updataBasedOnData = ()=>{
    const h2 = document.createElement("h2");
    h2.innerHTML = finalCount
    let add = arr[day.getDate()-1].appendChild(h2)
    // add.appendChild(h2)
}

updataBasedOnData();