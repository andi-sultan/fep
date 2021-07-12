const counterNum = document.getElementsByClassName("counter-num")[0];
counterNum.textContent = 0;

function changeNum(n) {
    currentNum = counterNum.textContent;
    cn = parseInt(currentNum) + parseInt(n);
    if (cn == 0) counterNum.style.color = "#3c3b37";
    else if (cn > 0) counterNum.style.color = "#1ab503";
    else if (cn < 0) counterNum.style.color = "#c60005";
    counterNum.textContent = cn;
}

const increase = document.getElementsByClassName("increase")[0];
increase.addEventListener("click", () => changeNum(1));

const decrease = document.getElementsByClassName("decrease")[0];
decrease.addEventListener("click", () => changeNum(-1));

const reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", () => {
    counterNum.textContent = 0;
    counterNum.style.color = "#3c3b37";
});
