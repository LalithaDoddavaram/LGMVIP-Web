let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button");


buttons.forEach((item) => {
    item.onclick = () => {
        if (item.value === "AC") {
            display.innerText = "";
        } else if (item.value === "Del") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText !== "" && item.value === "=") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText === "" && item.value === "=") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.value;
        }
    };
});