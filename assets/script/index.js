const getDate = document.getElementById("getDate");
const inputNumber = document.getElementById("inputNumber");
const resultDate = document.getElementById("resultDate");

let today = moment();

function startOrRestart() {
  getDate.style.visibility = "visible";
  resultDate.style.visibility = "hidden";
}

function requestCalculate() {
  getDate.style.visibility = "hidden";
  resultDate.style.visibility = "visible";

  let depureteInputNumber = moment(inputNumber.value, "DD/MM/YYYY");
  let dateDiff = today - depureteInputNumber;
  resultDate.innerText = Math.round(dateDiff / 1000 / 3600 / 24);
}
