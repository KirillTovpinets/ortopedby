let numbers = [];
const initVal = [];
let element = document.getElementById('first-number');
initVal.push(+element.innerText);
element.innerText = 0;
numbers.push(element);

element = document.getElementById('second-number');
initVal.push(+element.innerText);
element.innerText = 0;
numbers.push(element);

element = document.getElementById('third-number');
initVal.push(+element.innerText);
element.innerText = 0;
numbers.push(element);

element = document.getElementById('fourth-number');
initVal.push(+element.innerText);
element.innerText = 0;
numbers.push(element);

numbers.forEach((element, index) => {
    const timer = setInterval(function(){ 
        let cur = +element.innerText;
        element.innerText = ++cur; 
        if(+element.innerText === initVal[index]){
            clearInterval(timer);
        }
    }, 10);
})


