plusButton = document.getElementById("plusButton");
plusOperation = function(){

    number1 = document.getElementById("num1");
    number2 = document.getElementById("num2");
    for (let i =0; length.number1>i; i++){

    sum = parseInt(number1.value) + parseInt(number2.value);
}

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

    if(parseInt(number2) == 0){
        divide = console.log("you cant divide by 0!");
        result =document.getElementById("result");
        result.innerText = divide;
    }else{
        divide = parseFloat(number1.value) / parseFloat(number2.value);

        result =document.getElementById("result");
        result.innerText = divide;
    }
}
divButton.addEventListener("click", divOperation);



aveButton = document.getElementById("avButton");
aveOperation = function(){
    number1 = document.getElementById("num1");
    number2 = document.getElementById("num2");

    average = (parseInt(number1.value) + parseInt(number2.value)) / 2;

    result =document.getElementById("result");
    result.innerText = average;
}
aveButton.addEventListener("click", aveOperation);


powButton = document.getElementById("maxButton");
powOperation = function(){
    number1 = document.getElementById("num1");
    number2 = document.getElementById("num2");

    power = parseInt(number1.value) ** parseInt(number2.value);

    result =document.getElementById("result");
    result.innerText = power;
}
powButton.addEventListener("click", powOperation);


sqrtButton = document.getElementById("sqrtButton");
sqrtOperation = function(){
    number1 = document.getElementById("num1");
    sqrt = sqrt(parseInt(number1.value));

    result =document.getElementById("result");
    result.innerText = sqrt;
}
sqrtButton.addEventListener("click", sqrtOperation);
