let numberelement = document.querySelector('.num');
let number = numberelement.innerText;
const increasebtn = document.querySelector('.incr');
const decreasebtn = document.querySelector('.decr');
const resetbtn = document.querySelector('.rese');

const increase = () => {
    let newnumber = parseInt(number) + 1; 
    number = newnumber;
    numberelement.innerText = newnumber;
}

const decrease = () => {
    let newnumber = parseInt(number) - 1; 
    number = newnumber;
    numberelement.innerText = newnumber;
}

const reset = () => {
    number = '0';
    numberelement.innerText = '0';
}

increasebtn.addEventListener('click', increase);
decreasebtn.addEventListener('click', decrease);
resetbtn.addEventListener('click', reset);



