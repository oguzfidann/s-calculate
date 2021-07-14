/* alert("js is shit") */

// HESAPLA butonunu buldum, referansını aldım
let btnCalculate = document.querySelector("#calculate");

// Artık butona basıldığında operation FONKSİYNUNUN çalışacağına eminim
btnCalculate.addEventListener("click", operation);

// RESET BUTONU
let btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", reset);

function reset() {
  let ans = document.querySelector("#answer");
  let ulDOM = document.querySelector("#list");
  num1.value = "";
  num2.value = "";
  ans.value = "";
  ulDOM.innerHTML = "";
}

function operation() {
  // Değişkenleri bul ya da tayin et
  let ans = document.querySelector("#answer");
  let num1 = parseInt(document.querySelector("#num1").value);
  let num2 = parseInt(document.querySelector("#num2").value);

  // Operasyona göre işlemi yap ve RESULTA yaz
  if (document.querySelector("#add").checked) {
    ans.value = calculate("add", num1, num2);
    opType = "+";
  } else if (document.querySelector("#subtract").checked) {
    ans.value = calculate("subtract", num1, num2);
    opType = "-";
  } else if (document.querySelector("#multiply").checked) {
    ans.value = calculate("multiply", num1, num2);
    opType = "*";
  } else if (document.querySelector("#divide").checked) {
    ans.value = calculate("divide", num1, num2);
    opType = "/";
  }

  // History'e EKLE
  var opStr = num1 + " " + opType + " " + num2 + " = " + ans.value;
  history(opStr);
}

function calculate(action, n1, n2) {
  let result;
  switch (action) {
    case "add":
      result = n1 + n2;
      break;
    case "subtract":
      result = n1 - n2;
      break;
    case "multiply":
      result = n1 * n2;
      break;
    case "divide":
      result = n1 / n2;
      break;
  }
  return result;
}

function history(operationString) {
  let ulDOM = document.querySelector("#list");
  let liDOM = document.createElement("li");
  liDOM.innerHTML = operationString;
  ulDOM.append(liDOM);
}

/*

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let addition = document.querySelector("#add");
let subtraction = document.querySelector("#subtract");

let ans = document.querySelector("#answer");

let hesapla = document.querySelector("#hesapla");


if (document.querySelector("#addition").checked) {
    aswer.value= topla('addition');
}

if (document.querySelector("#subtraction").checked) {
    answer.value= çıkar('subtraction');
}

*/

/* ---------- toplama işlemi ----------- */

/*

function toplamaFonksiyonu() {

    ans.value = topla(num1.value, num2.value);

}

function topla(num1, num2) {

    return parseInt(num1) + parseInt(num2);
}

hesapla.addEventListener("click",toplamaFonksiyonu);

*/

/* --------- çıkarma işlemi ----------- */

/*


function çıkarmaFonksiyonu() {

    ans.value = çıkar(num1.value, num2.value);

}

function çıkar(num1, num2) {

    return parseInt(num1) - parseInt(num2);
}

hesapla.addEventListener("click",çıkarmaFonksiyonu);


*/
