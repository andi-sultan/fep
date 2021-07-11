function changeColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = rgb;
    document.getElementById("color-name").innerText = rgb;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => changeColor());
