var num1 = document.getElementById('one');
var num2 = document.getElementById('two');
var num3 = document.getElementById('three');
var num4 = document.getElementById('four');
var num5 = document.getElementById('five');
var num6 = document.getElementById('six');
var num7 = document.getElementById('seven');
var num8 = document.getElementById('eight');;
var num9 = document.getElementById('nine');
var num0 = document.getElementById('zero');


let addition = document.getElementById("add-btn");
let subtract = document.getElementById("sub-btn");
let multiply = document.getElementById("mult-btn");
let divide = document.getElementById("div-btn");
let average = document.getElementById("ave-btn")
let power = document.getElementById("pow-btn")
let squarroot = document.getElementById("sq-btn")

let display = document.getElementById("display-answer");
let clear = document.getElementById('clear-everything');
let equalBtn = document.getElementById('equal-btn');

let nums = [];
let result;

// diplay the number
num1.addEventListener('click', function() {
    display.textContent = "1";
    nums.push(1);
})
num2.addEventListener('click', function() {
    display.textContent = "2";
    nums.push(2);
});
num3.addEventListener('click', function() {
    display.textContent = "3";
    nums.push(3);
});
num4.addEventListener('click', function() {
    display.textContent = "4";
    nums.push(4);
});
num5.addEventListener('click', function() {
    display.textContent = "5";
    nums.push(5);
});
num6.addEventListener('click', function() {
    display.textContent = "6";
    nums.push(6);
});
num7.addEventListener('click', function() {
    display.textContent = "7";
    nums.push(7);
});
num8.addEventListener('click', function() {
    display.textContent = "8";
    nums.push(8);
});
num9.addEventListener('click', function() {
    display.textContent = "9";
    nums.push(9);
});
num0.addEventListener('click', function() {
    display.textContent = "0";
    nums.push(0);
});

// clear the display. Set to default 0
clear.addEventListener('click', function() {
    display.textContent = '0';
    result = '';
    nums = [];
})
// display result
equalBtn.addEventListener('click', function() {
    if (display.textContent == '0') {
        return;
    }
    display.textContent = result;
    result = '';
    nums = [];
})

// call appropriate function for operation button clicked and store result
average.addEventListener('click', function() {
    result = ave(nums[0], nums[1]);
});
power.addEventListener('click', function() {
    result = pow(nums[0], nums[1]);
});
squarroot.addEventListener('click', function() {
    result = sq(nums[0]);
});

addition.addEventListener('click', function() {
    result = add(nums);
});
subtract.addEventListener('click', function() {
    result = sub(nums[0], nums[1]);
});
multiply.addEventListener('click', function() {
    result = mult(nums);
})
divide.addEventListener('click', function() {
    result = div(nums[0], nums[1]);
})

function ave(num1, num2) {
    result = (num1 + num2) / 2;
    return result;
}
function sq(num1) {
    result = Math.sqrt(num1);
    return result;
}
function pow(num1, num2) {
    result = num1 ** num2
    return result;
}

function add(num) {
    result = 0;
    num.forEach(function(number) {
        result += number;
    });
    return result;
}

function sub(num1, num2) {
    result = num1 - num2;
    return result;
}

function mult(num) {
    result = 1;
    num.forEach(function(number) {
        result *= number;
    });
    return result;
}

function div(num1, num2) {
    if (num2 == 0) {
        return "Error: Division with Zero";
    } else {
        result = num1 / num2;
        return result;
    }
}
s