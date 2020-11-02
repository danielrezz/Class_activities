var count = 0;
var increment = document.querySelector("#increment");
var decrement = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
    countEl.textContent = count;
}

increment.addEventListener("click", function() {
    count++
    setCounterText();
})

decrement.addEventListener("click", function() {
    if (count > 0) {
        count--;
        setCounterText();
    }
})