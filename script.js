// Select dom elements 
const counter = document.getElementById('counter')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')

// initial state 
let count = 0;

// increment value 
increment.addEventListener('click', () =>{
    count++;
    counter.innerText = count;
});

// decrement value 
decrement.addEventListener('click', () =>{
    count--;
    counter.innerText = count;
})