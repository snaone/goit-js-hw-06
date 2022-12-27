let counterValue = 0;
const number = document.querySelector("#value");
const btnIncrement = document.querySelector('button[data-action = "increment"');
const btnDecrement = document.querySelector('button[data-action = "decrement"');
const increment = () => {
    counterValue += 1;
    number.textContent = counterValue;
}
const decrement = () => {
    counterValue -= 1;
    number.textContent = counterValue;
}

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);