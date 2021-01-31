plusButton = document.getElementById("plusButton");
plusOperation = function(){
    number1 = document.getElementById("num1");
    number2 = document.getElementById("num2");

    sum = parseInt(number1.value) + parseInt(number2.value);

    result =document.getElementById("result");
    result.innerText = sum;
}
plusButton.addEventListener("click", plusOperation);


minusButton = document.getElementById("minusButton");
minusOperation = function(){
    number1 = document.getElementById("num1");
    number2 = document.getElementById("num2");

    difference = parseInt(number1.value) - parseInt(number2.value);

    result =document.getElementById("result");
    result.innerText = difference;
}
minusButton.addEventListener("click", minusOperation);



multButton = document.getElementById("mulButton");
multOperation = function(){
    number1 = document.getElementById("num1");
    number2 = document.getElementById("num2");

    multiply = parseInt(number1.value) * parseInt(number2.value);

    result =document.getElementById("result");
    result.innerText = multiply;
}
multButton.addEventListener("click", multOperation);



divButton = document.getElementById("divButton");
divOperation = function(){
    number1 = document.getElementById("num1");
    number2 = document.getElementById("num2");

    divide = parseFloat(number1.value) / parseFloat(number2.value);

    result =document.getElementById("result");
    result.innerText = divide;
}
divButton.addEventListener("click", divOperation);



//  var btnadd = document.getElementById('btnADD').addEventListener
//  ('click', add); 

//  let length = prompt("how many number that you want to add : ");
//     array = new Array();
//     for(let i=0; i<length; i++){
//         array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
//         } 
//     console.log(add(array));

//  function add(arr){

//     sum = 0;
//      for(let i=0;i< arr.length;i++){
//          sum += arr[i];
//      }
//      return "the sum of the nums =  : " + sum;

     
   
//  }

 