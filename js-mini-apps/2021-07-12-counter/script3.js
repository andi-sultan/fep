let count = 0;

const counterNum = document.querySelectorAll(".counter-num")[0];
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("increase")) count++;
        else if (e.target.classList.contains("decrease")) count--;
        else if (e.target.classList.contains("reset")) count = 0;

        if (count > 0) counterNum.style.color = "#1ab503";
        else if (count < 0) counterNum.style.color = "#c60005";
        else if (count == 0) counterNum.style.color = "#3c3b37";

        counterNum.textContent = count;
    });
});
