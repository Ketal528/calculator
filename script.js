const display = document.getElementById("display");

/* ADD VALUE */
function addValue(value) {

    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

/* CLEAR */
function clearAll() {
    display.innerText = "0";
}

/* DELETE */
function deleteOne() {

    let text = display.innerText;

    if (text.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = text.slice(0, -1);
    }
}

/* CALCULATE */
function calculate() {

    try {

        let result = eval(display.innerText);

        if (!isFinite(result)) {
            display.innerText = "Error";
        } else {
            display.innerText = result;
        }

    } catch {
        display.innerText = "Error";
    }
}

/* SQUARE */
function square() {

    try {

        let value = eval(display.innerText);
        display.innerText = value * value;

    } catch {
        display.innerText = "Error";
    }
}

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", (e) => {

    if (
        (e.key >= "0" && e.key <= "9") ||
        "+-*/.%".includes(e.key)
    ) {
        addValue(e.key);
    }

    if (e.key === "Enter") {
        calculate();
    }

    if (e.key === "Backspace") {
        deleteOne();
    }

    if (e.key === "Escape") {
        clearAll();
    }
});
