

var firstValue = document.getElementById('first-value')
var secondValue = document.getElementById('second-value');
var thirdValue = document.getElementById('third-value');
const form = document.getElementById('form');
const error = document.getElementById('error');

let messages = []

function firstFunction(){
    firstValue.innerHTML= firstValue.value

if(firstValue.value != null){
    secondValue.value= firstValue.value*2;
    thirdValue.value= firstValue.value*firstValue.value;
    console.log(secondValue.value);
    
}
};

function secondFunction(){
    secondValue.innerHTML= secondValue.value

if(firstValue.value != null){
    firstValue.value= secondValue.value/2;
    thirdValue.value= firstValue.value*firstValue.value;
    console.log(secondValue.value);
    
}
};

function thirdFunction(){
    thirdValue.innerHTML= thirdValue.value

if(firstValue.value != null){
    firstValue.value= Math.sqrt(thirdValue.value);
    secondValue.value= firstValue.value*2;
    console.log(secondValue.value);
    
}
};